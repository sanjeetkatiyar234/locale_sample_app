/*
 * TODO Remove component // just for reference
 * https://deck.gl/docs/api-reference/layers/scatterplot-layer
 */
import { ScatterplotLayer, DeckGL, H3HexagonLayer, MapView } from "deck.gl";
import React, { useCallback, useState } from "react";
import MapGL from "react-map-gl";
import { latLngToCell } from "h3-js";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";

const INITIAL_VIEW_STATE = {
  main: {
    longitude: -122.4,
    latitude: 37.74,
    zoom: 10,
    maxZoom: 20,
    pitch: 30,
    bearing: 0,
  },
  minimap: {
    longitude: -122.4,
    latitude: 37.74,
    pitch: 30,
    zoom: 8,
  },
};

const mainView = new MapView({id: 'main', controller: true});
const minimapView = new MapView({
  id: 'minimap',
  x: 20,
  y: 20,
  width: '20%',
  height: '20%',
  clear: true
});

const minimapBackgroundStyle = {
  position: "absolute",
  zIndex: -1,
  width: "100%",
  height: "100%",
  boxShadow: "0 0 8px 2px rgba(0,0,0,0.5)",
};

// function layerFilter({layer, viewport}) {
//   const shouldDrawInMinimap =
//     layer.id.startsWith('coverage') || layer.id.startsWith('viewport-bounds');
//   if (viewport.id === 'minimap') return shouldDrawInMinimap;
//   return !shouldDrawInMinimap;
// }

const CustomScatterplotLayer = ({ data = [] }) => {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  // const scatterplotLayer = new ScatterplotLayer({
  //   id: "ScatterplotLayer",
  //   data: data,

  //   /* props from ScatterplotLayer class */

  //   // antialiasing: true,
  //   // billboard: false,
  //   // filled: true,
  //   getFillColor: [255, 140, 0],
  //   getLineColor: [0, 0, 0],
  //   // getLineWidth: 1,
  //   getPosition: (d) => d.coordinates,
  //   getRadius: (d) => Math.sqrt(d.exits),
  //   // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  //   lineWidthMinPixels: 1,
  //   // lineWidthScale: 1,
  //   // lineWidthUnits: 'meters',
  //   radiusMaxPixels: 100,
  //   radiusMinPixels: 1,
  //   radiusScale: 6,
  //   // radiusUnits: 'meters',
  //   stroked: true,

  //   /* props inherited from Layer class */

  //   // autoHighlight: false,
  //   // coordinateOrigin: [0, 0, 0],
  //   // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
  //   // highlightColor: [0, 0, 128, 128],
  //   // modelMatrix: null,
  //   opacity: 0.8,
  //   pickable: true,
  //   // visible: true,
  //   // wrapLongitude: false,
  // });
const layers=[
  new H3HexagonLayer({
    id: "H3HexagonLayer0",
    // data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.h3cells.json",
    data: data,
    /* props from H3HexagonLayer class */
    // centerHexagon: null,
    // coverage: 1,
    elevationScale: 10,
    extruded: true,
    filled: true,
    getElevation: (d) => Math.sqrt(d.exits),
    getFillColor: [255, 0, 0, 100],
    getHexagon: (d) => latLngToCell(d.coordinates[1], d.coordinates[0], 8),
    wireframe: false,
    pickable: true,
  }),
  
  new H3HexagonLayer({
    id: "H3HexagonLayer1",
    // data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.h3cells.json",
    data: data,
    /* props from H3HexagonLayer class */
    // centerHexagon: null,
    // coverage: 1,
    elevationScale: 10,
    extruded: true,
    filled: true,
    getElevation: (d) => Math.sqrt(d.exits * 2),
    getFillColor: [100, 255, 0, 100],
    getHexagon: (d) => latLngToCell(d.coordinates[1], d.coordinates[0], 8),
    wireframe: false,
    pickable: true,
  }),
];

  const onViewStateChange = useCallback(({viewState: newViewState}) => {
    setViewState(() => ({
      main: newViewState,
      minimap: {
        ...INITIAL_VIEW_STATE.minimap,
        longitude: newViewState.longitude,
        latitude: newViewState.latitude
      }
    }));
  }, []);

  return (
    <DeckGL
      layers={layers}
      views={[mainView, minimapView]}
      viewState={viewState}
      // parameters={{depthTest: false}}
      // initialViewState={INITIAL_VIEW_STATE}
      onViewStateChange={onViewStateChange}
      // layerFilter={layerFilter}
      // controller={true}
      getTooltip={({ object }) =>
        object &&
        `${object.name}
      ${object.address}`
      }
    >
      <MapView id="main">
        <MapGL
          height="100vh"
          width="100vw"
          mapStyle={MAP_STYLE}
          mapboxApiAccessToken={MAP_BOX_TOKEN}
        />
      </MapView>
      <MapView id="minimap">
        <div style={minimapBackgroundStyle} />
      </MapView>
    </DeckGL>
  );
};

export default CustomScatterplotLayer;

/*
 * https://deck.gl/docs/api-reference/layers/scatterplot-layer
 */
import { DeckGL, HexagonLayer, MapView } from "deck.gl";
import React, { useCallback, useState } from "react";
import MapGL from "react-map-gl";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";

const INITIAL_VIEW_STATE = {
  main: {
    longitude: 54.4,
    latitude: 24.49,
    zoom: 10,
    maxZoom: 20,
    pitch: 30,
    bearing: 0,
  },
  minimap: {
    longitude: 54.4,
    latitude: 24.49,
    zoom: 8,
    maxZoom: 20,
    pitch: 30,
    bearing: 0,
  },
};

const mainView = new MapView({ id: "main", controller: true });
const minimapView = new MapView({
  id: "minimap",
  x: 20,
  y: 20,
  width: "20%",
  height: "20%",
  clear: true,
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

const getTooltip = ({ object }) =>
  object &&
  `${object.position.join(", ")}
Count: ${object.points.length}`;

const colorRange = [
  [255, 0, 60, 122],
  [0, 122, 255, 122],
  [0, 122, 255, 122],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];

const CustomScatterplotLayer = ({ data = [] }) => {
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const layers = [
    data &&
      new HexagonLayer({
        id: "HexagonLayer0",
        data: data,

        /* props from HexagonLayer class */

        // colorAggregation: 'SUM',
        // colorDomain: null,
        colorRange,
        colorScaleType: "ordinal",
        coverage: 1,
        // elevationAggregation: 'SUM',
        // elevationDomain: null,
        // elevationLowerPercentile: 0,
        elevationRange: [1, 10000],
        elevationScale: 1,
        // elevationScaleType: 'linear',
        // elevationUpperPercentile: 100,
        extruded: true,
        getColorValue: (points) => points.length % 2,
        // getColorWeight: 1,
        // getElevationValue: null,
        // getElevationWeight: 1,
        getPosition: (d) => d.start_loc,
        // hexagonAggregator: null,
        // lowerPercentile: 0,
        // material: true,
        // onSetColorDomain: null,
        // onSetElevationDomain: null,
        radius: 200,
        upperPercentile: 100,

        /* props inherited from Layer class */

        // autoHighlight: false,
        // coordinateOrigin: [0, 0, 0],
        // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
        // highlightColor: [0, 0, 128, 128],
        // modelMatrix: null,
        // opacity: 1,
        pickable: true,
        // visible: true,
        // wrapLongitude: false,
      }),

    data &&
      new HexagonLayer({
        id: "HexagonLayer1",
        data: data,

        /* props from HexagonLayer class */

        // colorAggregation: 'SUM',
        // colorDomain: null,
        colorRange,
        colorScaleType: "ordinal",
        coverage: 3,
        // elevationAggregation: 'SUM',
        elevationDomain: [1, 50000],
        // elevationLowerPercentile: 0,
        elevationRange: [0, 50000],
        elevationScale: 1,
        // elevationScaleType: 'linear',
        // elevationUpperPercentile: 100,
        extruded: true,
        getColorValue: (points) => points.length,
        // getColorWeight: 1,
        // getElevationValue: null,
        // getElevationWeight: 1,
        getPosition: (d) => d.end_loc,
        // hexagonAggregator: null,
        // lowerPercentile: 0,
        // material: true,
        // onSetColorDomain: null,
        // onSetElevationDomain: null,
        radius: 200,
        // upperPercentile: 100,

        /* props inherited from Layer class */

        // autoHighlight: false,
        // coordinateOrigin: [0, 0, 0],
        // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
        // highlightColor: [0, 0, 128, 128],
        // modelMatrix: null,
        // opacity: 1,
        pickable: true,
        // visible: true,
        // wrapLongitude: false,
      }),
  ];

  const onViewStateChange = useCallback(({ viewState: newViewState }) => {
    setViewState(() => ({
      main: newViewState,
      minimap: {
        ...INITIAL_VIEW_STATE.minimap,
        longitude: newViewState.longitude,
        latitude: newViewState.latitude,
      },
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
      getTooltip={getTooltip}
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

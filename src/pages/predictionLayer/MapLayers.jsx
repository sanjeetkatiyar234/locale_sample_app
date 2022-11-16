/*
 * https://deck.gl/docs/api-reference/layers/scatterplot-layer
 */
import { DeckGL, HexagonLayer, MapView } from "deck.gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import React, { useCallback, useState } from "react";
import MapGL from "react-map-gl";
import useDimensions from "react-cool-dimensions";
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

const minimapBackgroundStyle = {
  position: "absolute",
  zIndex: -1,
  width: "100%",
  height: "100%",
  boxShadow: "0 0 8px 2px rgba(0,0,0,0.5)",
};

function layerFilter({ layer, viewport }) {
  if (viewport.id === "main" && layer.id === "geojson-layer") {
    // Do not draw the geo layer for the minimap
    return false;
  }
  return true;
}

const getTooltip = ({ object }) => {
  return object && object.elevationValue + " ";
  //   object &&
  //   `${object.position.join(", ")}
  // Count: ${object.points.length}`;
};

const colorRange = [
  [255, 0, 60, 122],
  [0, 122, 255, 122],
  [0, 122, 255, 122],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];

const MapLayers = ({ data = [], geoJsonData, toggleView = true }) => {
  const { observe, width } = useDimensions();
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);

  const views = [
    new MapView({
      id: "main",
      x: toggleView ? 0 : parseInt(width / 2),
      y: 0,
      width: "50%",
      controller: true,
    }),
    new MapView({
      id: "minimap",
      x: toggleView ? parseInt(width / 2) : 0,
      y: 0,
      width: "50%",
      clear: true,
      controller: true,
    }),
  ];

  const layers = [
    new GeoJsonLayer({
      id: "geojson-layer",
      data: geoJsonData,
      pickable: true,
      stroked: true,
      filled: true,
      extruded: false,
      pointType: "circle",
      lineWidthScale: 10,
      lineWidthMinPixels: 1,
      getFillColor: [90, 120, 120, 70],
      getLineColor: [100, 100, 12, 200],
      getPointRadius: 100,
      getLineWidth: 2,
      getElevation: 30,
      Visible: true,
    }),

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

  const onViewStateChange = useCallback(
    ({ viewId, viewState: newViewState }) => {
      setViewState(() => ({
        main: newViewState,
        minimap: {
          ...INITIAL_VIEW_STATE.minimap,
          longitude: newViewState.longitude,
          latitude: newViewState.latitude,
          zoom: newViewState.zoom,
          pitch: newViewState.pitch,
          bearing: newViewState.bearing,
        },
      }));
    },
    []
  );

  return (
    <div ref={observe}>
      <DeckGL
        layers={layers}
        views={views}
        viewState={viewState}
        // parameters={{depthTest: false}}
        // initialViewState={INITIAL_VIEW_STATE}
        onViewStateChange={onViewStateChange}
        layerFilter={layerFilter}
        controller={false}
        getTooltip={getTooltip}
      >
        <MapView id="main">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px 0px",
            }}
          >
            Predicted View
          </div>
          <MapGL
            height="100vh"
            width="100vw"
            mapStyle={MAP_STYLE}
            mapboxApiAccessToken={MAP_BOX_TOKEN}
          />
        </MapView>
        <MapView id="minimap">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px 0px",
            }}
          >
            Actual View
          </div>
          <div style={minimapBackgroundStyle} />
        </MapView>
      </DeckGL>
    </div>
  );
};

export default MapLayers;

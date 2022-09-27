import { DeckGL, HexagonLayer } from "deck.gl";
import MapGL from "react-map-gl";
import React from "react";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  longitude: 24.49,
  latitude: 54.4,
  zoom: 11,
  maxZoom: 20,
  pitch: 30,
  bearing: 0,
};

const getTooltip = ({ object }) =>
  object &&
  `${object.position.join(", ")}
Count: ${object.points.length}`;

const CustomHexagonLayer = ({ data = [] }) => {
  const layer = new HexagonLayer({
    id: "HexagonLayer",
    data: data,

    /* props from HexagonLayer class */

    // colorAggregation: 'SUM',
    // colorDomain: null,
    // colorRange: [[255, 255, 178], [254, 217, 118], [254, 178, 76], [253, 141, 60], [240, 59, 32], [189, 0, 38]],
    // colorScaleType: 'quantize',
    // coverage: 1,
    // elevationAggregation: 'SUM',
    // elevationDomain: null,
    // elevationLowerPercentile: 0,
    // elevationRange: [0, 1000],
    elevationScale: 4,
    // elevationScaleType: 'linear',
    // elevationUpperPercentile: 100,
    extruded: true,
    // getColorValue: null,
    // getColorWeight: 1,
    // getElevationValue: null,
    // getElevationWeight: 1,
    getPosition: (d) => d.startPosition,
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
  });

  return (
    <DeckGL
      layers={[layer]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
    >
      <MapGL height="100vh" width="100vw" mapStyle={MAP_STYLE} />
    </DeckGL>
  );
};

export default CustomHexagonLayer;

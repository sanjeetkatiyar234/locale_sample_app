import { DeckGL, H3HexagonLayer } from "deck.gl";
import MapGL from "react-map-gl";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  `Start Hex:${object.start_hex}
 Route Id: ${object.route_id}`;

const CustomH3HexagonLayer = ({ data = [] }) => {
  const navigate = useNavigate();
  const layer = new H3HexagonLayer({
    id: "H3HexagonLayer",
    data,

    /* props from H3HexagonLayer class */

    // centerHexagon: null,
    // coverage: 1,
    elevationScale: 20,
    extruded: true,
    filled: true,
    getElevation: (d) => d.route_id,
    getFillColor: (d) => [255, +d.route_id * 200, 0],
    getHexagon: (d) => d.start_hex,
    // getLineColor: [0, 0, 0, 255],
    // getLineWidth: 1,
    // highPrecision: 'auto',
    // lineJointRounded: false,
    // lineMiterLimit: 4,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    // lineWidthMinPixels: 0,
    // lineWidthScale: 1,
    // lineWidthUnits: 'meters',
    // material: true,
    // stroked: true,
    wireframe: false,

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
      onClick={(value) => {
        console.log(value);
        // if (object) {
        //   navigate("/arclayer", {
        //     state: { hexagonLayerData: object },
        //   });
        // }
      }}
    >
      <MapGL height="100vh" width="100vw" mapStyle={MAP_STYLE} />
    </DeckGL>
  );
};

export default CustomH3HexagonLayer;

import { DeckGL, H3HexagonLayer } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import { useNavigate } from "react-router-dom";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  // longitude: 54.4,
  // latitude: 24.49,
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
  maxZoom: 20,
  pitch: 30,
  bearing: 0,
};

const getTooltip = ({ object }) =>
  object &&
  `Start Hex:${object.hex}
  Route Id: ${object.count}`;

const CustomH3HexagonLayer = ({ data = [] }) => {
  const navigate = useNavigate();
  const layer = new H3HexagonLayer({
    id: "H3HexagonLayer",
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.h3cells.json',
    /* props from H3HexagonLayer class */
    // centerHexagon: null,
    // coverage: 1,
    elevationScale: 20,
    extruded: true,
    filled: true,
    getElevation: d => d.count,
    getFillColor: d => [255, (1 - d.count / 500) * 255, 0],
    getHexagon: d => d.hex,
    wireframe: false,
    pickable: true,
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

import { DeckGL, H3HexagonLayer } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import { useNavigate } from "react-router-dom";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";

// const MAP_STYLE = "mapbox://styles/mapbox/dark-v10";
// const MAP_STYLE =
//   "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

const INITIAL_VIEW_STATE = {
  longitude: 54.4,
  latitude: 24.49,
  zoom: 9,
  maxZoom: 20,
  pitch: 30,
  bearing: 0,
};

const getTooltip = ({ object }) =>
  object &&
  `Hex:${object.hex_id}
  Id:${object.id}
  Vehicle Count: ${object.vehicle_count}`;

const CustomH3HexagonLayer = ({ data = [] }) => {
  const navigate = useNavigate();
  const layer = new H3HexagonLayer({
    id: "H3HexagonLayer",
    // data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.h3cells.json",
    data: data,
    /* props from H3HexagonLayer class */
    // centerHexagon: null,
    // coverage: 1,
    elevationScale: 20,
    extruded: true,
    filled: true,
    getElevation: (d) => d.vehicle_count,
    getFillColor: (d) => d.color,
    getHexagon: (d) => d.hex_id,
    wireframe: false,
    pickable: true,
  });
  return (
    <DeckGL
      layers={[layer]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={getTooltip}
      onClick={({ object, picked }) => {
        if (picked && object) {
          // navigate(`/ride-share-demand?hex_id=${object.hex_id}&start_time=${object.start_time}`);
          navigate({
            pathname: "/ride-share-demand",
            search: `start_hex=${object.hex_id}&start_time=${object.start_time}`,
          });
        }
      }}
    >
      <MapGL
        height="100vh"
        width="100vw"
        mapStyle={MAP_STYLE}
        mapboxApiAccessToken={MAP_BOX_TOKEN}
      />
    </DeckGL>
  );
};

export default CustomH3HexagonLayer;

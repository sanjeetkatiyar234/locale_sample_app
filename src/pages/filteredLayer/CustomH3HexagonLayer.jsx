import { resetMapPosition } from "app/actions";
import { DeckGL, H3HexagonLayer } from "deck.gl";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MapGL from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// custom import
import { MAP_BOX_TOKEN, MAP_STYLE } from "utils/constants";
import { getCountkeySelector } from "./selectors";

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
        Vehicle Count: ${object.vehicle_count}`;

const CustomH3HexagonLayer = ({ data = [] }) => {
  const dispatch = useDispatch();
  const [viewState, setViewState] = useState(INITIAL_VIEW_STATE);
  const resetMap = useSelector((state) => state.app.appState.resetMapPosition);

  useEffect(() => {
    if (resetMap) {
      // enforce a different latitude
      setViewState({
        ...INITIAL_VIEW_STATE,
        latitude: INITIAL_VIEW_STATE.latitude + Math.random() * 0.001,
      });
      dispatch(resetMapPosition(false));
    }
  }, [resetMap]);
  const navigate = useNavigate();
  const layer = new H3HexagonLayer({
    id: "H3HexagonLayer1",
    data: data,
    /* props from H3HexagonLayer class */
    // centerHexagon: null,
    // coverage: 1,
    elevationScale: 20,
    extruded: true,
    filled: true,
    getElevation: (d) => 10 * +d.vehicle_count,
    getFillColor: (d) => d.color,
    getHexagon: (d) => d.hex_id,
    wireframe: false,
    pickable: true,
  });

  return (
    <DeckGL
      layers={[layer]}
      initialViewState={viewState}
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

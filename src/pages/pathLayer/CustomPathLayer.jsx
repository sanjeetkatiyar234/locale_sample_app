import { DeckGL, GeoJsonLayer } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMapPosition } from "app/actions";

//url for data formates verification : "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-lines.json",
const INITIAL_VIEW_STATE = {
  longitude: 54.4,
  latitude: 24.49,
  zoom: 11,
  maxZoom: 20,
  pitch: 30,
  bearing: 30,
};

const CustomPathLayer = ({ data = [] }) => {
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

  const layer = new PathLayer({
    id: "PathLayer",
    data,

    /* props from PathLayer class */

    // billboard: false,
    // capRounded: false,
    getColor: (d) => {
      const hex = d.color;
      // convert to RGB
      return hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16));
    },
    getPath: (d) => d.path,
    getWidth: (d) => 5,
    // jointRounded: false,
    // miterLimit: 4,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 20,
    // widthUnits: 'meters',

    /* props inherited from Layer class */

    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    parameters: {
      depthMask: false,
    },
    pickable: true,
    // visible: true,
    // wrapLongitude: false,
  });

  return (
    <DeckGL
      layers={[layer]}
      initialViewState={viewState}
      controller={true}
      getTooltip={({ object }) =>
        object && (object.properties.name || object.properties.station)
      }
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

export default CustomPathLayer;

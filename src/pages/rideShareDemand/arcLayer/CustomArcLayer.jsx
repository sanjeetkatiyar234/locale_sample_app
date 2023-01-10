import { ArcLayer, DeckGL, ScatterplotLayer, TextLayer } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import { cellToLatLng } from "h3-js";
import { MAP_BOX_TOKEN, MAP_STYLE } from "utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMapPosition } from "app/actions";

// const MAP_STYLE =
//   "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
// const MAP_STYLE = "mapbox://styles/mapbox/dark-v10";

const INITIAL_VIEW_STATE = {
  longitude: 54.4,
  latitude: 24.49,
  zoom: 10,
  maxZoom: 20,
  pitch: 30,
  bearing: 30,
};

const CustomArcLayer = ({ data = [] }) => {
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

  /**
   * Data format:
   * [
   *   {
   *     inbound: 72633,
   *     outbound: 74735,
   *     from: {
   *       name: '19th St. Oakland (19TH)',
   *       coordinates: [-122.269029, 37.80787]
   *     },
   *     to: {
   *       name: '12th St. Oakland City Center (12TH)',
   *       coordinates: [-122.271604, 37.803664]
   *   },
   *   ...
   * ]
   */

  const arclayer = new ArcLayer({
    id: "arc-layer",
    data,
    pickable: true,
    getWidth: 1,
    getSourcePosition: (d) =>
      d.start_hex ? cellToLatLng(d.start_hex)?.reverse() : d.start_loc,
    getTargetPosition: (d) =>
      d.end_hex ? cellToLatLng(d.end_hex)?.reverse() : d.end_loc,
    getSourceColor: (d) => [d.id % 255, 140, 0],
    getTargetColor: (d) => [d.id % 255, 140, 0],
  });
  const scatterplotLayerlayer = new ScatterplotLayer({
    id: "ScatterplotLayer",
    data: [...new Map(data.map((item) => [item["end_hex"], item])).values()],
    /* props from ScatterplotLayer class */
    // antialiasing: true,
    // billboard: false,
    filled: true,
    getFillColor: (d) => [d.id % 255, 140, 0],
    getLineColor: (d) => [d.id % 255, 140, 0],
    getLineWidth: 1,
    getPosition: (d) => {
      return d.end_hex ? cellToLatLng(d.end_hex)?.reverse() : d.end_loc;
    },
    getRadius: (d) => d.vehicle_count || 0,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    lineWidthMinPixels: 1,
    lineWidthScale: 1,
    // lineWidthUnits: 'meters',
    radiusMaxPixels: 1000,
    radiusMinPixels: 1,
    radiusScale: 100,
    // radiusUnits: 'meters',
    stroked: true,

    /* props inherited from Layer class */
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    opacity: 0.8,
    // pickable: true,
    // visible: true,
    // wrapLongitude: true,
  });
  const textLayer = new TextLayer({
    id: "TextLayer",
    data,
    /* props from TextLayer class */

    // background: false,
    // backgroundPadding: [0, 0, 0, 0],
    billboard: true,
    // characterSet: " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
    // fontFamily: 'Monaco, monospace',
    // fontSettings: {},
    // fontWeight: "normal",
    getAlignmentBaseline: "center",
    getAngle: 0,
    // getBackgroundColor: [255, 255, 255, 255],
    // getBorderColor: [0, 0, 0, 255],
    // getBorderWidth: 0,
    // getColor: [0, 0, 0, 255],
    getPixelOffset: [15, 5],
    getPosition: (d) =>
      d.end_hex ? cellToLatLng(d.end_hex)?.reverse() : d.end_loc,
    getSize: 14,
    getText: (d) => `${d.vehicle_count}`,
    getTextAnchor: "middle",
    getColor: [255, 255, 255],
    sizeScale: 2,
    opacity: 1,
    pickable: true,
    visible: true,
  });

  return (
    <DeckGL
      layers={[textLayer, arclayer, scatterplotLayerlayer]}
      initialViewState={viewState}
      controller={true}
      getTooltip={({ object }) =>
        object &&
        `Vehicle Count: ${object.vehicle_count ? object.vehicle_count : 0}`
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

export default CustomArcLayer;

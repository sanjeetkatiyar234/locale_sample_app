import { DeckGL, GeoJsonLayer } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMapPosition } from "app/actions";

import GeoJsondata from "./data.json";

const INITIAL_VIEW_STATE = {
  longitude: 54.4,
  latitude: 24.49,
  zoom: 8,
  maxZoom: 20,
  pitch: 30,
  bearing: 30,
};

const CustomGeoJsonLayer = ({ data = [] }) => {
  // let geodata = GeoJsondata.features.map((d) => {
  //   console.log('d.geometry', d);
  //   if (d.geometry) {
  //     return d
  //   }
  //   // return {
  //   //   "type": "Feature",
  //   //   "properties": {
  //   //     "name": "Van Dorn Street",
  //   //     "marker-color": "#0000ff",
  //   //     "marker-symbol": "rail-metro",
  //   //     "line": "blue"
  //   //   },
  //   //   "geometry": {
  //   //     "type": "LineString",
  //   //     "coordinates": [
  //   //       -77.12911152370515,
  //   //       38.79930767201779
  //   //     ]
  //   //   }
  //   // };
  // })
  let geodata = GeoJsondata.features.shift();
  console.log('GeoJsondata', GeoJsondata.features);
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

  const layer = new GeoJsonLayer({
    id: "GeoJsonLayer",
    data: GeoJsondata.features,
    /* props from GeoJsonLayer class */

    // elevationScale: 1,
    extruded: true,
    filled: true,
    getElevation: 30,
    // getFillColor: [160, 160, 180, 200],
    // getIconAngle: 0,
    // getIconColor: [0, 0, 0, 255],
    // getIconPixelOffset: [0, 0],
    // getIconSize: 1,
    getLineColor: (f) => {
      const hex = f.properties.color || "#ffe800";
      // convert to RGB
      return hex
        ? hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16))
        : [0, 0, 0];
    },
    getLineWidth: 5,
    getPointRadius: 4,
    getText: (f) => f.properties.streetName,
    // getTextAlignmentBaseline: 'center',
    // getTextAnchor: 'middle',
    // getTextAngle: 0,
    // getTextBackgroundColor: [255, 255, 255, 255],
    // getTextBorderColor: [0, 0, 0, 255],
    // getTextBorderWidth: 0,
    // getTextColor: [0, 0, 0, 255],
    // getTextPixelOffset: [0, 0],
    getTextSize: 12,
    // iconAlphaCutoff: 0.05,
    // iconAtlas: null,
    // iconBillboard: true,
    // iconMapping: {},
    // iconSizeMaxPixels: Number.MAX_SAFE_INTEGER,
    // iconSizeMinPixels: 0,
    // iconSizeScale: 1,
    // iconSizeUnits: 'pixels',
    // lineBillboard: false,
    // lineCapRounded: false,
    // lineJointRounded: false,
    // lineMiterLimit: 4,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    lineWidthMinPixels: 2,
    // lineWidthScale: 1,
    // lineWidthUnits: 'meters',
    // material: true,
    // pointAntialiasing: true,
    // pointBillboard: false,
    // pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
    // pointRadiusMinPixels: 0,
    // pointRadiusScale: 1,
    pointRadiusUnits: "pixels",
    pointType: "circle+text",
    stroked: false,
    // textBackground: false,
    // textBackgroundPadding: [0, 0, 0, 0],
    // textBillboard: true,
    // textCharacterSet: [' ', '!', '"', '#', '$', '%', '&', ''', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ''],
    // textFontFamily: 'Monaco, monospace',
    // textFontSettings: {},
    // textFontWeight: 'normal',
    // textLineHeight: 1,
    // textMaxWidth: -1,
    // textOutlineColor: [0, 0, 0, 255],
    // textOutlineWidth: 0,
    // textSizeMaxPixels: Number.MAX_SAFE_INTEGER,
    // textSizeMinPixels: 0,
    // textSizeScale: 1,
    // textSizeUnits: 'pixels',
    // textWordBreak: 'break-word',
    // wireframe: false,

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

export default CustomGeoJsonLayer;

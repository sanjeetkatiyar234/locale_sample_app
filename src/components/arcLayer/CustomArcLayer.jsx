import { ArcLayer, DeckGL } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import { cellToLatLng } from "h3-js";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";

// const MAP_STYLE =
//   "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
// const MAP_STYLE = "mapbox://styles/mapbox/dark-v10";

const INITIAL_VIEW_STATE = {
  longitude: 54.4,
  latitude: 24.49,
  zoom: 8,
  maxZoom: 20,
  pitch: 30,
  bearing: 30,
};

const CustomArcLayer = ({ data = [] }) => {
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

  const layer = new ArcLayer({
    id: "arc-layer",
    data,
    pickable: true,
    getWidth: 1,
    getSourcePosition: (d) => (d.start_hex ? cellToLatLng(d.start_hex)?.reverse() : d.start_loc),
    getTargetPosition: (d) => (d.end_hex ? cellToLatLng(d.end_hex)?.reverse() : d.end_loc),
    getSourceColor: (d) => [d.id % 255, 140, 0],
    getTargetColor: (d) => [d.id % 255, 140, 0],
  });

  return (
    <DeckGL
      layers={[layer]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({ object }) =>
        object && `${object.start_hex ? object.start_hex : object.start_loc.join(",")} to ${object.end_hex ? object.end_hex : object.end_loc.join(",")}`
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

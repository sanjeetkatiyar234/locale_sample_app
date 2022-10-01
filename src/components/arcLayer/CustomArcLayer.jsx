import { ArcLayer, DeckGL } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

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
    getSourcePosition: (d) => d.startPosition,
    getTargetPosition: (d) => d.endPosition,
    getSourceColor: (d) => [100 * +d.route_id, 140, 0],
    getTargetColor: (d) => [200 * +d.route_id, 140, 0],
  });

  return (
    <DeckGL
      layers={[layer]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({ object }) =>
        object &&
        `${object.startPosition.join(",")} to ${object.endPosition.join(",")}`
      }
    >
      <MapGL height="100vh" width="100vw" mapStyle={MAP_STYLE} />
    </DeckGL>
  );
};

export default CustomArcLayer;

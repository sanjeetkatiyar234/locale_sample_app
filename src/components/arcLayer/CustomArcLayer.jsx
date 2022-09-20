import React from "react";
import { ArcLayer, DeckGL } from "deck.gl";
import { arcLayerData } from "./sampleData";

const layer = new ArcLayer({
  id: "ArcLayer",
  data: arcLayerData,

  /* props from ArcLayer class */

  // getHeight: 1,
  getSourceColor: (d) => [Math.sqrt(d.inbound), 140, 0],
  getSourcePosition: (d) => d.from.coordinates,
  getTargetColor: (d) => [Math.sqrt(d.outbound), 140, 0],
  getTargetPosition: (d) => d.to.coordinates,
  // getTilt: 0,
  getWidth: 12,
  // greatCircle: false,
  // widthMaxPixels: Number.MAX_SAFE_INTEGER,
  // widthMinPixels: 0,
  // widthScale: 1,
  // widthUnits: 'pixels',

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

const CustomArcLayer = () => {
  return (
    <DeckGL
      viewState={{
        longitude: -122.45,
        latitude: 37.78,
        zoom: 8,
        pitch: 30,
        bearing: 0,
      }}
      layers={[layer]}
      getTooltip={({ object }) =>
        object && `${object.from.name} to ${object.to.name}`
      }
    />
  );
};

export default CustomArcLayer;

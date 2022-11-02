/*
* https://deck.gl/docs/api-reference/layers/scatterplot-layer
*/
import { ScatterplotLayer, DeckGL } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";

const INITIAL_VIEW_STATE = {
    longitude: -122.4,
    latitude: 37.74,
    zoom: 11,
    maxZoom: 20,
    pitch: 30,
    bearing: 0
};

const CustomScatterplotLayer = ({data=[]}) => {

    const layer = new ScatterplotLayer({
        id: 'ScatterplotLayer',
        data: data,
        
        /* props from ScatterplotLayer class */
        
        // antialiasing: true,
        // billboard: false,
        // filled: true,
        getFillColor: [255, 140, 0],
        getLineColor: [0, 0, 0],
        // getLineWidth: 1,
        getPosition: d => d.coordinates,
        getRadius: d => Math.sqrt(d.exits),
        // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
        lineWidthMinPixels: 1,
        // lineWidthScale: 1,
        // lineWidthUnits: 'meters',
        radiusMaxPixels: 100,
        radiusMinPixels: 1,
        radiusScale: 6,
        // radiusUnits: 'meters',
        stroked: true,
        
        /* props inherited from Layer class */
        
        // autoHighlight: false,
        // coordinateOrigin: [0, 0, 0],
        // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
        // highlightColor: [0, 0, 128, 128],
        // modelMatrix: null,
        opacity: 0.8,
        pickable: true,
        // visible: true,
        // wrapLongitude: false,
      });

  return (
     <DeckGL
      layers={[layer]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({object}) => object && `${object.name}
      ${object.address}`}
    >
      <MapGL
        height="100vh"
        width="100vw"
        mapStyle={MAP_STYLE}
        mapboxApiAccessToken={MAP_BOX_TOKEN}
      />
    </DeckGL>
  )
}

export default CustomScatterplotLayer;
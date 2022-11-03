/*
* https://deck.gl/docs/api-reference/layers/scatterplot-layer
*/
import { ScatterplotLayer, DeckGL, H3HexagonLayer } from "deck.gl";
import React from "react";
import MapGL from "react-map-gl";
import {  latLngToCell } from "h3-js";
import { MAP_BOX_TOKEN, MAP_STYLE } from "../../utils/constants";

const INITIAL_VIEW_STATE = {
    longitude: -122.4,
    latitude: 37.74,
    zoom: 10,
    maxZoom: 20,
    pitch: 30,
    bearing: 0
};

const CustomScatterplotLayer = ({data=[]}) => {

    const scatterplotLayer = new ScatterplotLayer({
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

      const h3HexagonLayer = new H3HexagonLayer({
        id: "H3HexagonLayer",
        // data: "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.h3cells.json",
        data: data,
        /* props from H3HexagonLayer class */
        // centerHexagon: null,
        // coverage: 1,
        elevationScale: 10,
        extruded: true,
        filled: true,
        getElevation: (d) => Math.sqrt(d.exits),
        getFillColor: [255, 0, 0,100],
        getHexagon: (d) => latLngToCell(d.coordinates[1], d.coordinates[0], 8),
        wireframe: false,
        pickable: true,
      });

  return (
     <DeckGL
      layers={[h3HexagonLayer,scatterplotLayer]}
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
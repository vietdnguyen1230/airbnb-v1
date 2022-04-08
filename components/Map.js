import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'

function Mape() {
  const [ viewport, setViewport ] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <div>
      <ReactMapGL
        mapStyle="mapbox://styles/vietnguyen2330/cl0kbxdp9005u16pahm00m9o4"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)} 
      ></ReactMapGL>
    </div>
  )
}

export default Mape;

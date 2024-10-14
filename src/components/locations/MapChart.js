import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markerOffsetY = -20
const markerOffsetX = -10

const markers = [
  { name: "St. Louis, MO", person: "Grace Fu", coordinates: [-90.1994, 38.6270] },
  { name: "Jacksonville, FL", person: "Anjali Gusani", coordinates: [-81.6557, 30.3322] },
  { name: "Charleston, SC", person: "Helina Brown", coordinates: [-79.9311, 32.7765] },
  { name: "Bakersfield, CA", person: "Jaiden Bareng", coordinates: [-119.0187, 35.3733] },
  { name: "Overland Park, KS", person: "Trinh Ha", coordinates: [-94.6708, 38.9822] },
  { name: "Louisville, KY", person: "Victoria Fu", coordinates: [-85.7585, 38.2527] },
  { name: "San Diego, CA", person: "Ania Saucedo", coordinates: [-117.1611, 32.7157] }
];

const RenderMarker = ({ name, coordinates, person }) => {
  const [hover, setHover] = useState(false)
        
  return <Marker key={name} coordinates={coordinates} id={name} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <text x={markerOffsetX}>📍</text>
    {
      hover && <>
      <text textAnchor="middle" y={markerOffsetY*7/4} style={{ fill: "#333", fontSize: 12 }}>
        {name}
      </text>
      <text textAnchor="middle" y={markerOffsetY} style={{ fill: "#333", fontSize: 10 }}>
        Led by {person}
      </text>
      </>
    }
  </Marker>
}

const MapChart = () => {
  return (
    <ComposableMap projection="geoAlbersUsa" style={{width: 800}}>
      <Geographies geography={geoUrl}>
        {({ geographies, outline, borders }) => (
          <>
            <Geography geography={outline} fill="#E2C6A0" />
            <Geography geography={borders} fill="none" stroke="#FFF" />
          </>
        )}
      </Geographies>
      {markers.map(info => <RenderMarker {...info} />)}
    </ComposableMap>
  );
};

export default MapChart;
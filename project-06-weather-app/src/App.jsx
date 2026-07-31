/*global google */

import { useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "API_KEY";

const App = () => {

  const mapRef = useRef(null);

  const center = {
    lat: 12.3714,
    lng: -1.5197, // Ouagadougou, Burkina Faso
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
    border: "1px solid #ccc",
  } 

  const {isLoaded, loadError} = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  })

  useEffect(() => {
    function handleresize () {
      if(mapRef.current) {
        google.maps.event.trigger(mapRef.current, "resize");
        mapRef.current.setCenter(center);
      }
    }

    window.addEventListener("resize", handleresize);
    return () => {
      window.removeEventListener("resize", handleresize);
    }
  }, [])

  if (loadError) return <p>Error Loading Google Maps</p>

  if (!isLoaded) return <p>Loading map...</p>

  return (
    <div>
      <h1>Google Maps</h1>
      <GoogleMap
        center={center}
        mapContainerStyle={containerStyle}
        zoom={10}
        onLoad={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
        onUnmount={() => {
          mapRef.current = null;
        }}
      >
        
      </GoogleMap>
    </div>
  )
}

export default App;
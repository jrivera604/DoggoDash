import { useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";




export default function Maptest() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
     
    if (!isLoaded) return <div>Loading...</div>
    return <Map />;

}

function Map() {
    const center = useMemo(() => ({ lat: 43.651, lng: -79.347 }), []);
  
    return (
      <GoogleMap zoom={9} center={{ lat: 43.651, lng: -79.347 }} mapContainerClassName="map-container">
        <MarkerF position={{ lat: 43.651, lng: -79.347 }} />
      </GoogleMap>
    );
  }
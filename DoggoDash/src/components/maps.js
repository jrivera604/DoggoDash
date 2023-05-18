import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "../../styles/map.module.css";


export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (

      <div className={styles.mapContainer}>
        <Map />
      </div>
  );
}

function Map() {
    const center = useMemo(() => ({ lat: 43.651, lng: -79.347 }), []);
    const markerPosition = useMemo(() => ({ lat: 45, lng: -80.5 }), []);
  
    return (
      <GoogleMap zoom={9} center={center} mapContainerClassName={styles.mapContainer}>
        <MarkerF position={center}/>
      </GoogleMap>
    );
  }
  

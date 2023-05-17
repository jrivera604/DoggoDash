import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from "../../styles/map.module.css";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {/* Sidebar content */}
      </div>
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>
  );
}

function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    const markerPosition = useMemo(() => ({ lat: 45, lng: -80.5 }), []);
  
    return (
      <GoogleMap zoom={10} center={center} mapContainerClassName={styles.mapContainer}>
        <Marker position={markerPosition} />
      </GoogleMap>
    );
  }
  

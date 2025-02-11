import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from '../styles/index.module.css';
import Banner from '../components/banner';

// Dynamically load Google Maps component with SSR disabled
const GoogleMapReact = dynamic(() => import('google-map-react'), { ssr: false });

// Simple Marker component to display on the map
const Marker = () => <div style={{ color: 'red', fontSize: '24px' }}>📍</div>;

export default function MapPage() {
  // Define the center of the map and zoom level
  const center = { lat: 41.6611, lng: -91.5302 }; // Default center (e.g., Iowa City)
  const zoom = 15;

  return (
    <div>
      <Banner />
      <div style={{ height: '500px', width: '100%', marginTop: '20px', border: '1px solid #ccc' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string }}
          defaultCenter={center}
          center={center}
          defaultZoom={zoom}
        >
          <Marker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
}

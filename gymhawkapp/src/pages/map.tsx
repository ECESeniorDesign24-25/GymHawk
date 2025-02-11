// src/pages/map.tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import React from 'react';

// Define the prop types for our marker component.
interface MarkerProps {
  lat: number;
  lng: number;
  text: string;
}

// Dynamically import GoogleMapReact to avoid SSR issues.
const GoogleMapReact = dynamic(() => import('google-map-react'), { ssr: false });

// Marker component used to display text on the map.
const AnyReactComponent: React.FC<MarkerProps> = ({ text }) => (
  <div>{text}</div>
);

export default function MapPage() {
  const router = useRouter();
  const { lat, lng, floors, label } = router.query;
  
  // Use number (or null) for the selected floor.
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);
  const floorOptions: number[] = floors ? JSON.parse(floors as string) : [];

  useEffect(() => {
    if (floorOptions.length > 0) {
      setSelectedFloor(floorOptions[0]);
    }
  }, [floors]);

  const handleFloorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const floor = parseInt(e.target.value, 10);
    setSelectedFloor(floor);
  };

  // Parse the latitude and longitude values.
  const centerLat = lat ? parseFloat(lat as string) : 0;
  const centerLng = lng ? parseFloat(lng as string) : 0;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">
        <h1 className="text-3xl">Map for {label}</h1>
        <div className="mt-4">
          <label htmlFor="floorSelect">Select Floor: </label>
          <select
            id="floorSelect"
            value={selectedFloor !== null ? selectedFloor.toString() : ""}
            onChange={handleFloorChange}
            className="text-black"
          >
            {floorOptions.map((floor: number, index: number) => (
              <option key={index} value={floor.toString()}>
                {`Floor ${floor}`}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string }}
          defaultCenter={{ lat: centerLat, lng: centerLng }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={centerLat}
            lng={centerLng}
            text={`Floor: ${selectedFloor}`}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}

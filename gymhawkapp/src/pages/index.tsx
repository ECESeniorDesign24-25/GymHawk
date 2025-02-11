// src/pages/index.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

// Sample options with lat/long and floor information.
const options = [
  { value: 'loc1', label: 'Location 1', lat: 37.7749, lng: -122.4194, floors: [1, 2, 3] },
  { value: 'loc2', label: 'Location 2', lat: 40.7128, lng: -74.0060, floors: [1, 2] },
  // Add more locations as needed.
];

export default function Home() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleSelect = (option: any) => {
    setSelectedOption(option);
  };

  const handleButtonClick = () => {
    if (selectedOption) {
      router.push({
        pathname: '/map',
        query: {
          lat: selectedOption.lat,
          lng: selectedOption.lng,
          floors: JSON.stringify(selectedOption.floors),
          label: selectedOption.label,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Welcome to the Map App</h1>
      <div className="w-1/3">
        <Select
          options={options}
          onChange={handleSelect}
          placeholder="Select a location..."
          className="text-black"
        />
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
        onClick={handleButtonClick}
      >
        Select
      </button>
    </div>
  );
}

import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { RecLocation } from "../Consts";

interface CustomMapProps {
  floor: number;
}

export default function CustomMap({ floor }: CustomMapProps) {
  let sensorMarkers: { sensorName: string, lat: number; long: number; color: string }[] = [];

  console.log("floor:", floor);
  console.log("lat:", RecLocation.lat);
  console.log("long:", RecLocation.long);

  const randomLat = () => {
    let randomOperator = 5 * Math.random()
    return RecLocation.lat + randomOperator * (Math.random()/(10**4));
  }

  const randomLong = () => {
    let randomOperator = 5 * Math.random()
    return RecLocation.long + randomOperator * (Math.random()/(10**4));
  }

  // dummy data
  if (floor === 1) {
    sensorMarkers = [
      { sensorName: "floor 1 sensor 1", lat: randomLat(), long: randomLong(), color: "red" },
      { sensorName: "floor 1 sensor 2", lat: randomLat(), long: randomLong(), color: "green" },
      { sensorName: "floor 1 sensor 3", lat: randomLat(), long: randomLong(), color: "red" },
      { sensorName: "floor 1 sensor 4", lat: randomLat(), long: randomLong(), color: "green" },
    ];
  } else if (floor === 2) {
    sensorMarkers = [
      { sensorName: "floor 2 sensor 1", lat: randomLat(), long: randomLong(), color: "red" },
      { sensorName: "floor 2 sensor 2", lat: randomLat(), long: randomLong(), color: "green" },
      { sensorName: "floor 2 sensor 3", lat: randomLat(), long: randomLong(), color: "red" },
      { sensorName: "floor 2 sensor 4", lat: randomLat(), long: randomLong(), color: "green" },
    ];
  } else if (floor === 3) {
    sensorMarkers = [
      { sensorName: "floor 3 sensor 1", lat: randomLat(), long: randomLong(), color: "red" },
      { sensorName: "floor 3 sensor 2", lat: randomLat(), long: randomLong(), color: "green" },
      { sensorName: "floor 3 sensor 3", lat: randomLat(), long: randomLong(), color: "red" },
      { sensorName: "floor 3 sensor 4", lat: randomLat(), long: randomLong(), color: "green" },
    ];
  }

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: RecLocation.lat,
          longitude: RecLocation.long,
          latitudeDelta: RecLocation.latDelta, 
          longitudeDelta: RecLocation.longDelta, 
        }}
        showsBuildings={true}
        showsIndoors={true}
        zoomEnabled={true}
        showsPointsOfInterest={true}
      >
        {sensorMarkers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.lat, longitude: marker.long }}
            title={marker.sensorName}
          >
            <View
              style={[
                styles.dot,
                { backgroundColor: marker.color },
              ]}
            />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    height: 300,
    marginBottom: 20,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

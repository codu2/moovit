import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import IconButton from "../component/UI/IconButton";
import PrimaryButton from "../component/UI/PrimaryButton";

import { Colors } from "../constants/styles";

const Map = () => {
  const [location, setLocation] = useState(null);
  const [message, setMessage] = useState(null);

  const region = {
    latitude: location ? location.latitude : 37.78825,
    longitude: location ? location.longitude : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const getLocation = async () => {
    setLocation(null);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setMessage("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  let text = "Waiting...";

  if (message) {
    text = message;
  }

  if (!location) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{text}</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <MapView initialRegion={region} style={styles.map}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            pinColor={Colors.accent700}
          />
        )}
      </MapView>
      {location && (
        <View style={styles.reload}>
          <IconButton
            icon="reload"
            color={Colors.accent700}
            size={28}
            onPress={getLocation}
          />
        </View>
      )}
      <View style={styles.button}>
        <PrimaryButton>Set Destination</PrimaryButton>
      </View>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
  },
  map: {
    flex: 1,
  },
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    fontSize: 16,
    fontFamily: "line-bold",
  },
  reload: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  button: {
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

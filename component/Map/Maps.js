import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_API } from "@env";

import { Colors } from "../../constants/styles";

const { width, height } = Dimensions.get("window");

const Maps = ({ location, coordinate }) => {
  let region = {
    latitude: location ? location.latitude : 37.78825,
    longitude: location ? location.longitude : -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922 * (width / height),
  };

  return (
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
      {coordinate && (
        <>
          <Marker
            coordinate={{
              latitude: coordinate.origin.lat,
              longitude: coordinate.origin.lng,
            }}
            pinColor={Colors.accent700}
          />
          <Marker
            coordinate={{
              latitude: coordinate.destination.lat,
              longitude: coordinate.destination.lng,
            }}
            pinColor={Colors.accent700}
          />
          <MapViewDirections
            origin={{
              latitude: coordinate.origin.lat,
              longitude: coordinate.origin.lng,
            }}
            destination={{
              latitude: coordinate.destination.lat,
              longitude: coordinate.destination.lng,
            }}
            apikey={GOOGLE_MAPS_API}
            strokeWidth={3}
            strokeColor={Colors.accent700}
            mode="TRANSIT"
          />
        </>
      )}
    </MapView>
  );
};

export default Maps;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

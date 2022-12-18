import { StyleSheet, Dimensions, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useDispatch } from "react-redux";

import { GOOGLE_MAPS_API } from "@env";

import { Colors } from "../../constants/styles";
import { getAddress, getDistanceAndDuration } from "../../store/coordinate";

const { width, height } = Dimensions.get("window");

const Maps = ({ location, coordinate }) => {
  const dispatch = useDispatch();

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
            onStart={(params) => {
              console.log(
                `Started routing between "${params.origin}" and "${params.destination}"`
              );
            }}
            onReady={(result) => {
              //console.log(`Distance: ${result.distance} km`);
              //console.log(`Duration: ${result.duration} min.`);

              dispatch(
                getDistanceAndDuration({
                  distance: result.distance,
                  duration: result.duration,
                })
              );
              dispatch(
                getAddress({
                  start: result.legs[0].start_address,
                  end: result.legs[0].end_address,
                })
              );
            }}
            onError={(errorMessage) => {
              //console.log(errorMessage);
              Alert.alert(
                "No search results found.",
                "Please check your input or try again later"
              );
            }}
            // waypoints 경유지 배열
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

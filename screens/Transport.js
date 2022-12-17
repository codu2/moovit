import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import Header from "../component/UI/Header";
import GooglePlacesInput from "../component/Search/GooglePlacesInput";
import Maps from "../component/Map/Maps";
import { useEffect } from "react";

const Transport = ({ route, navigation }) => {
  const transport = route.params.transport;
  const coordinate = useSelector((state) => state.coordinate);

  useEffect(() => {
    if (coordinate.distance && coordinate.duration) {
      navigation.navigate("Booking");
    }
  }, [coordinate.distance, coordinate.duration]);

  return (
    <SafeAreaView style={styles.screen}>
      <Header style={{ justifyContent: "space-between" }} goBack />
      <View style={styles.container}>
        <Text style={styles.title}>{transport?.name}</Text>
        <View style={styles.wrapper}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>From</Text>
            <View style={styles.input}>
              <GooglePlacesInput placeholder="New York" tag="origin" />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>To</Text>
            <View style={styles.input}>
              <GooglePlacesInput placeholder="Manhattan" tag="destination" />
            </View>
          </View>
        </View>
        {coordinate.origin && coordinate.destination && (
          <View style={styles.map}>
            <Maps
              location={{
                latitude: coordinate.origin.lat,
                longitude: coordinate.origin.lng,
              }}
              coordinate={{
                origin: coordinate.origin,
                destination: coordinate.destination,
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Transport;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    fontFamily: "line-extraBold",
    fontSize: 24,
    textAlign: "center",
  },
  inputContainer: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    fontFamily: "line-regular",
  },
  input: {
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    marginVertical: 8,
  },
  map: {
    flex: 1,
  },
});

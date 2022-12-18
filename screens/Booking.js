import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import PrimaryButton from "../component/UI/PrimaryButton";

const Booking = ({ navigation }) => {
  const coordinate = useSelector((state) => state.coordinate);

  const calculateFare = (distance) => {
    const calculateDistance = distance - 2;
    const additionalFare = (calculateDistance * 1000) / 132;

    const fare = Math.round(3800 + additionalFare);
    console.log(fare);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const onPressBooking = () => {
    console.log("booking");
    calculateFare(coordinate.distance.toFixed(2));
  };

  return (
    <Pressable style={styles.modal} onPress={goBack}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.label}>From</Text>
            <Text style={styles.text}>{coordinate.address.start}</Text>
          </View>
          <View>
            <Text style={styles.label}>To</Text>
            <Text style={styles.text}>{coordinate.address.end}</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>Distance</Text>
            <Text style={styles.text}>{coordinate.distance.toFixed(2)} km</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.text}>
              {coordinate.duration.toFixed(2)} min
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={onPressBooking}>Booking</PrimaryButton>
        </View>
      </View>
    </Pressable>
  );
};

export default Booking;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  container: {
    height: "40%",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  wrapper: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: "line-regular",
    fontSize: 14,
    marginVertical: 4,
  },
  text: {
    fontFamily: "line-bold",
    fontSize: 16,
    marginVertical: 4,
  },
  button: {
    marginVertical: 12,
    alignItems: "center",
  },
});

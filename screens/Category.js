import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";
import { useDispatch } from "react-redux";

import Header from "../component/UI/Header";
import CategoryItem from "../component/Category/CategoryItem";

import { selectTransport } from "../store/coordinate";

const transports = [
  {
    id: "t1",
    videoUri: require("../assets/icons/taxi.mp4"),
    name: "Taxi",
  },
  {
    id: "t2",
    videoUri: require("../assets/icons/bus.mp4"),
    name: "Bus",
  },
  {
    id: "t3",
    videoUri: require("../assets/icons/subway.mp4"),
    name: "Subway",
  },
  {
    id: "t4",
    videoUri: require("../assets/icons/train.mp4"),
    name: "Train",
  },
  {
    id: "t5",
    videoUri: require("../assets/icons/cruise.mp4"),
    name: "Cruise",
  },
  {
    id: "t6",
    videoUri: require("../assets/icons/plane.mp4"),
    name: "Plane",
  },
];

const Category = ({ navigation }) => {
  const dispatch = useDispatch();

  const onPressTransport = (transport) => {
    dispatch(selectTransport(transport.name));
    navigation.navigate("Transport", { transport });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <ScrollView style={styles.container} bounces={false}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>All Transport</Text>
        </View>
        <View style={styles.wrapper}>
          {transports.map((transport) => (
            <CategoryItem
              key={transport.id}
              videoUri={transport.videoUri}
              onPress={onPressTransport.bind(this, transport)}
            >
              {transport.name}
            </CategoryItem>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  wrapper: {
    marginVertical: 12,
  },
  text: {
    fontFamily: "line-bold",
    fontSize: 22,
  },
});

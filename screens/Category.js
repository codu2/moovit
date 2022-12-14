import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";

import Header from "../component/UI/Header";
import CategoryItem from "../component/Category/CategoryItem";

const Category = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <ScrollView style={styles.container} bounces={false}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>All Transport</Text>
        </View>
        <View style={styles.wrapper}>
          <CategoryItem videoUri={require("../assets/icons/taxi.mp4")}>
            Taxi
          </CategoryItem>
          <CategoryItem videoUri={require("../assets/icons/bus.mp4")}>
            Bus
          </CategoryItem>
          <CategoryItem videoUri={require("../assets/icons/subway.mp4")}>
            Subway
          </CategoryItem>
          <CategoryItem videoUri={require("../assets/icons/train.mp4")}>
            Train
          </CategoryItem>
          <CategoryItem videoUri={require("../assets/icons/cruise.mp4")}>
            Cruise
          </CategoryItem>
          <CategoryItem videoUri={require("../assets/icons/plane.mp4")}>
            Plane
          </CategoryItem>
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

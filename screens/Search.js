import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Header from "../component/UI/Header";
import GooglePlacesInput from "../component/Search/GooglePlacesInput";
import PrimaryButton from "../component/UI/PrimaryButton";

import { Colors } from "../constants/styles";

const Search = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Ionicons name="search-sharp" color={Colors.accent700} size={24} />
          <Text style={styles.text}>Where would you want to go?</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>From</Text>
          <View style={styles.input}>
            <GooglePlacesInput placeholder="New York" />
          </View>
        </View>
        <View style={styles.label}>
          <Text>To</Text>
          <View style={styles.input}>
            <GooglePlacesInput placeholder="Manhattan" />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>search</PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  textContainer: {
    marginTop: 12,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "line-bold",
    marginLeft: 4,
  },
  inputContainer: {
    marginVertical: 8,
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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
  },
});

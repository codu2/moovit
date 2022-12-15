import { SafeAreaView, StyleSheet, View } from "react-native";

import PrimaryButton from "../component/UI/PrimaryButton";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <PrimaryButton onPress={() => navigation.navigate("BottomTabs")}>
          Login
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

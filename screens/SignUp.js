import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import AuthForm from "../component/Auth/AuthForm";
import LoadingOverlay from "../component/UI/LoadingOverlay";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signup } from "../util/auth";
import { authenticate } from "../store/auth";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const onSubmit = async ({ email, password, confirmPassword }) => {
    setIsAuthenticating(true);

    const emailIsValid = email.trim().includes("@");
    const passwordIsValid = password.trim().length > 6;
    const confirmPasswordIsValid = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || !confirmPasswordIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      return;
    }

    try {
      const token = await signup(email, password);
      dispatch(authenticate(token));

      navigation.navigate("BottomTabs");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not create user, please check your input and try again later."
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/login.jpg")}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons
            name="transit-connection-variant"
            size={24}
            color="black"
          />
          <Text style={styles.title}>MOOVIT</Text>
        </View>
        <AuthForm onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingBottom: 28,
  },
  image: {
    width: "100%",
    height: 320,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "line-extraBold",
    textAlign: "center",
    marginLeft: 8,
  },
});

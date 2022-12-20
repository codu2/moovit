import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "..//UI/Input";
import PrimaryButton from "../UI/PrimaryButton";

import { Colors } from "../../constants/styles";

const AuthForm = ({ onSubmit, isLogin }) => {
  const navigation = useNavigation();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const onSubmitHandler = () => {
    if (isLogin) {
      onSubmit({
        email: enteredEmail,
        password: enteredPassword,
      });
    } else {
      onSubmit({
        email: enteredEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
      });
    }
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmPassword("");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Input
          label="Email"
          placeholder="Please enter a valid email format(using @)"
          onChangeText={(value) => setEnteredEmail(value)}
          value={enteredEmail}
          keyboardType="email-address"
        />
        <Input
          label="Password"
          placeholder="At least 6 characters"
          onChangeText={(value) => setEnteredPassword(value)}
          value={enteredPassword}
          secure
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            placeholder="Must match the password entered"
            onChangeText={(value) => setEnteredConfirmPassword(value)}
            value={enteredConfirmPassword}
            secure
          />
        )}
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.textContainer,
          pressed && styles.pressed,
        ]}
        onPress={() => {
          if (isLogin) {
            navigation.navigate("SignUp");
          } else {
            navigation.navigate("Login");
          }
        }}
      >
        {isLogin && (
          <View>
            <Text style={styles.text}>Don't you have a Moovit account?</Text>
            <Text style={styles.text}>Go to sign up for membership.</Text>
          </View>
        )}
        {!isLogin && (
          <View>
            <Text style={styles.text}>Did you have a Moovit account?</Text>
            <Text style={styles.text}>Go to login.</Text>
          </View>
        )}
      </Pressable>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onSubmitHandler} style={styles.button}>
          {isLogin ? "Login" : "Sign Up"}
        </PrimaryButton>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  textContainer: {
    marginVertical: 8,
  },
  text: {
    fontFamily: "line-regular",
    fontSize: 12,
    textAlign: "center",
    color: Colors.accent700,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonContainer: {
    marginVertical: 16,
    alignItems: "center",
  },
});

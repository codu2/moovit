import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/styles";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 148,
    height: 48,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: Colors.accent700,
  },
  pressed: {
    opacity: 0.75,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "line-extraBold",
    color: Colors.primary700,
    fontSize: 16,
  },
});

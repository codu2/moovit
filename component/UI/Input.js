import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({
  label,
  placeholder,
  onChangeText,
  value,
  keyboardType,
  secure,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        autoComplete={false}
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginVertical: 8,
  },
  label: {
    fontFamily: "line-bold",
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    fontFamily: "line-regular",
    fontSize: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
  },
});

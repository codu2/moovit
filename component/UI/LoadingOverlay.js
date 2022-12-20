import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const LoadingOverlay = ({ message }) => {
  return (
    <View style={styles.overlay}>
      <Text style={styles.text}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  text: {
    fontSize: 16,
    fontFamily: "line-bold",
    marginBottom: 12,
  },
});

import { useRef, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Video } from "expo-av";

import Header from "../component/UI/Header";

import { Colors } from "../constants/styles";

const MyTicket = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <SafeAreaView style={styles.screen}>
      <Header />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>My Ticket</Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.videoContainer}>
            <Video
              style={styles.video}
              ref={video}
              source={require("../assets/icons/distance.mp4")}
              useNativeControls
              resizeMode="contain"
              isLooping
              shouldPlay
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
          <Text>Reserved Ticket</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyTicket;

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
  },
  text: {
    fontSize: 18,
    fontFamily: "line-bold",
    marginLeft: 4,
  },
  wrapper: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  videoContainer: {
    width: 48,
    height: 48,
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

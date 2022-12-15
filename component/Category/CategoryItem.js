import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Video } from "expo-av";

import { Colors } from "../../constants/styles";
import IconButton from "../../component/UI/IconButton";

const CategoryItem = ({ children, videoUri, onPress }) => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <Pressable
      style={({ pressed }) => [styles.itemContainer, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.item}>
        <View style={styles.content}>
          <View style={styles.videoContainer}>
            <Video
              style={styles.video}
              ref={video}
              source={videoUri}
              useNativeControls
              resizeMode="contain"
              isLooping
              shouldPlay
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
          <Text style={styles.text}>{children}</Text>
        </View>
        <View style={styles.button}>
          <IconButton
            icon="arrow-forward-circle-outline"
            color={Colors.accent700}
            size={32}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 8,
    marginVertical: 8,
    borderRadius: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    width: 48,
    height: 48,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  text: {
    width: 100,
    fontSize: 18,
    marginLeft: 16,
    fontFamily: "line-bold",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
  },
  pressed: { opacity: 0.75 },
});

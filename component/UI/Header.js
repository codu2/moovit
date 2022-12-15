import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import IconButton from "./IconButton";
import { Colors } from "../../constants/styles";

const Header = ({ style, goBack }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, style]}>
      {goBack && (
        <View style={styles.button}>
          <IconButton
            icon="arrow-back"
            color={Colors.primary700}
            size={28}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
      <View style={styles.buttons}>
        <IconButton
          icon="notifications-outline"
          color={Colors.primary700}
          size={24}
          style={styles.button}
        />
        <IconButton
          icon="settings-outline"
          color={Colors.primary700}
          size={24}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 8,
  },
});

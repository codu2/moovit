import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Category from "./screens/Category";
import Search from "./screens/Search";
import Map from "./screens/Map";
import MyTicket from "./screens/MyTicket";
import Transport from "./screens/Transport";
import Login from "./screens/Login";

import { Colors } from "./constants/styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: "#fff" }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            borderRadius: 20,
            height: 68,
            marginBottom: 24,
            marginHorizontal: 16,
            paddingBottom: 12,
            paddingTop: 12,
            paddingHorizontal: 8,
            elevation: 2,
            shadowColor: "#000",
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
          },
          tabBarLabelStyle: {
            marginTop: 4,
            fontFamily: "line-bold",
            fontSize: 12,
          },
          tabBarActiveTintColor: Colors.accent700,
          tabBarInactiveTintColor: Colors.primary600,
          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.accent700 : Colors.primary600;

            switch (route.name) {
              case "Category":
                return <Ionicons name="home-outline" color={color} size={24} />;
              case "Search":
                return <Ionicons name="search-sharp" color={color} size={24} />;
              case "Map":
                return <Ionicons name="map-outline" color={color} size={24} />;
              case "MyTicket":
                return (
                  <MaterialCommunityIcons
                    name="ticket-outline"
                    color={color}
                    size={24}
                  />
                );
            }
          },
        })}
      >
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="MyTicket" component={MyTicket} />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "line-thin": require("./assets/fonts/LINESeedSans_A_Th.ttf"),
    "line-regular": require("./assets/fonts/LINESeedSans_A_Rg.ttf"),
    "line-bold": require("./assets/fonts/LINESeedSans_A_Bd.ttf"),
    "line-extraBold": require("./assets/fonts/LINESeedSans_A_XBd.ttf"),
    "line-heavy": require("./assets/fonts/LINESeedSans_A_He.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="Transport" component={Transport} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

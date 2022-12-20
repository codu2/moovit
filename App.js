import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Category from "./screens/Category";
import Search from "./screens/Search";
import Map from "./screens/Map";
import MyTicket from "./screens/MyTicket";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Transport from "./screens/Transport";
import Booking from "./screens/Booking";

import { authenticate } from "./store/auth";
import { store } from "./store/store";
import { Colors } from "./constants/styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Auth() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

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

function Navigation() {
  const dispatch = useDispatch();
  const [isTryingLogin, setIsTryLogin] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        dispatch(authenticate(storedToken));
      }

      setIsTryLogin(false);
    };

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Transport" component={Transport} />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{
            presentation: "transparentModal",
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
        <Navigation />
      </Provider>
    </>
  );
}

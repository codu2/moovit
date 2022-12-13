import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Category from "./screens/Category";
import Search from "./screens/Search";
import Map from "./screens/Map";
import MyTicket from "./screens/MyTicket";
import Login from "./screens/Login";

import { Colors } from "./constants/styles";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: Colors.primary700 }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.primary700,
          marginBottom: 16,
          marginHorizontal: 16,
          borderRadius: 24,
          height: 64,
          paddingBottom: 12,
          paddingTop: 8,
          paddingHorizontal: 8,
        },
        tabBarLabelStyle: { marginTop: 4, fontFamily: "line-bold" },
        tabBarActiveTintColor: Colors.accent700,
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
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

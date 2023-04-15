import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import About from "./screens/About";
import Details from "./screens/Details";
import { createStackNavigator } from "@react-navigation/stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function Tabs() {
    return (
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: "#4682b4" },
          headerTitleStyle: {
            color: "white",
          },
          tabBarIcon: () => {
            const icons = {
              home: "home-city-outline",
              about: "home-edit",
            };

            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                size={24}
                color="#4682b4"
              />
            );
          },
        })}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="about" component={About} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen component={Tabs} name="home"></Stack.Screen>
        <Stack.Screen component={Details} name="details"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

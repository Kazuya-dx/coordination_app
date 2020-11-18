import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import store from "./stores/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CoordinationScreen from "./screens/CoordinationScreen";
import TopsScreen from "./screens/TopsScreen";
import PantsScreen from "./screens/PantsScreen";
import OuterScreen from "./screens/OuterScreen";

/*
  スタック用スクリーンの定義
*/

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const DetailsStack = createStackNavigator();
const DetailsStackScreen = () => {
  return (
    <DetailsStack.Navigator>
      <DetailsStack.Screen name="Details" component={DetailsScreen} />
    </DetailsStack.Navigator>
  );
};

const CoordinationStack = createStackNavigator();
const CoordinationStackScreen = () => {
  return (
    <CoordinationStack.Navigator>
      <CoordinationStack.Screen
        name="Coordination"
        component={CoordinationScreen}
      />
      <CoordinationStack.Screen name="Tops" component={TopsScreen} />
      <CoordinationStack.Screen name="Pants" component={PantsScreen} />
      <CoordinationStack.Screen name="Outer" component={OuterScreen} />
    </CoordinationStack.Navigator>
  );
};

/*
  Appとタブメニューの定義
*/

function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "";

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home";
              } else if (route.name === "Details") {
                iconName = focused ? "ios-list-box" : "ios-list";
              } else if (route.name === "Coordinate") {
                iconName = focused ? "ios-person" : "ios-person";
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "black",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Details" component={DetailsStackScreen} />
          <Tab.Screen name="Coordinate" component={CoordinationStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

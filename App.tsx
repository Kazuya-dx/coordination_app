import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-redux";
import store from "./stores/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import CoordinationScreen from "./screens/CoordinationScreen";
import TopsScreen from "./screens/TopsScreen";
import PantsScreen from "./screens/PantsScreen";
import OuterScreen from "./screens/OuterScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Coordination" component={CoordinationScreen} />
          <Stack.Screen name="Tops" component={TopsScreen} />
          <Stack.Screen name="Pants" component={PantsScreen} />
          <Stack.Screen name="Outer" component={OuterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

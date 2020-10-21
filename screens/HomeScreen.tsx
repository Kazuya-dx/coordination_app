import * as React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Coordination"
        onPress={() => navigation.navigate("Coordination")}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

export default HomeScreen;

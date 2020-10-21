import * as React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetailsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;

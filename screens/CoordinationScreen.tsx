import * as React from "react";
import { View, Text, Button, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoordinationScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Coordination Screen</Text>
      <Image style={{width: 400, height: 500}} source={require('../assets/test_model.png')}/>
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CoordinationScreen;

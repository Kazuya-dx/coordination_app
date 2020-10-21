import React, {useState, useEffect} from "react";
import { View, Button, Image} from "react-native";
import { Asset } from "expo-asset";
import { useNavigation } from "@react-navigation/native";
import * as ImageManipulator from "expo-image-manipulator";

const CoordinationScreen: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const image = Asset.fromModule(require("../assets/test_model.png"));
      await image.downloadAsync();
      setReady(true);
      setImage(image)
    })();
  }, []);

  const _rotate90andFlip = async () => {
    const manipResult = await ImageManipulator.manipulateAsync(
      image.localUri || image.uri,
      [{ rotate: 90 }, { flip: ImageManipulator.FlipType.Vertical }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setImage(manipResult);
  };

  const _renderImage = () => {
    return (
      <View
        style={{
          marginVertical: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={{ uri: image.localUri || image.uri }}
          style={{ width: 500, height: 500, resizeMode: "contain" }}
        />
      </View>
    );
  };

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {ready && image && _renderImage()}
      <Button title="Rotate and Flip" onPress={_rotate90andFlip} />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CoordinationScreen;

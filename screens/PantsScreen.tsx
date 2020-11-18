import * as React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { setPants } from "../stores/pants";
import { clearPantsLoading } from "../stores/loading";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "WASHED DENIM BI-COLOR PANTS",
    image: require("../assets/test_pants.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "SIDE STRAP TROUSERS (2B001-0120-16)",
    image: require("../assets/test_pants2.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "STRAIGHT TROUSERS (2B006-0120-15)",
    image: require("../assets/test_pants3.png"),
  },
];

const Item = ({ item }: any) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        dispatch(clearPantsLoading(""));
        dispatch(setPants({ id: item.id, name: item.name, image: item.image }));
        navigation.navigate("Coordination");
      }}
    >
      <Image style={styles.image} source={item.image} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const PantsScreen = () => {
  const renderItem = ({ item }: any) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "white",
    margin: 5,
    width: (Dimensions.get("window").width - 20) / 2,
    borderRadius: 2,
    overflow: "hidden",
  },
  image: {
    height: 250,
    width: (Dimensions.get("window").width - 20) / 2,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    fontSize: 10,
  },
});

export default PantsScreen;

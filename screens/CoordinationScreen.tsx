import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ViewStyle,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Item from "../components/Item";

const CoordinationScreen: React.FC = () => {
  const navigation = useNavigation();
  const tops = useSelector((state: any) => state.tops);
  const pants = useSelector((state: any) => state.pants);
  const outer = useSelector((state: any) => state.outer);
  const [loaded, setLoaded] = useState({
    tops: false,
    pants: false,
    outer: false,
    person: false,
  });
  const [tuckIn, setTuckIn] = useState({
    check: false,
    display: "OFF",
    zIndex: 0,
  });

  return (
    <View style={{ flex: 1 }}>
      {loaded.tops && loaded.pants && loaded.outer && loaded.person ? (
        <></>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 100,
            backgroundColor: "#FFF",
          }}
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}

      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Tops")}>
          <ImageBackground
            source={tops.image}
            style={menuStyle}
            onLoadEnd={() => {
              setLoaded({
                tops: true,
                pants: loaded.pants,
                outer: loaded.outer,
                person: loaded.person,
              });
              console.log("tops ok");
            }}
          >
            <View
              style={{
                backgroundColor: "#FFF",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.7,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Tops</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Pants")}>
          <ImageBackground
            source={pants.image}
            style={menuStyle}
            onLoadEnd={() => {
              setLoaded({
                tops: loaded.tops,
                pants: true,
                outer: loaded.outer,
                person: loaded.person,
              });
              console.log("pants ok");
            }}
          >
            <View
              style={{
                backgroundColor: "#FFF",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.7,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Pants</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Outer")}>
          <ImageBackground
            source={outer.image}
            style={menuStyle}
            onLoadEnd={() => {
              setLoaded({
                tops: loaded.tops,
                pants: loaded.pants,
                outer: true,
                person: loaded.person,
              });
              console.log("outer ok");
            }}
          >
            <View
              style={{
                backgroundColor: "#FFF",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.7,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>Outer</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            width: 60,
            height: 60,
            padding: 3,
            margin: 15,
            backgroundColor: "#ddd",
          }}
          onTouchStart={() => {
            if (tuckIn.check) {
              setTuckIn({ check: false, display: "OFF", zIndex: 0 });
            } else {
              setTuckIn({ check: true, display: "ON", zIndex: 2 });
            }
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "80%",
            }}
          >
            <Text style={{ fontSize: 20, color: "green" }}>
              {tuckIn.display}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#FFF",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.7,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>Tuck In</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/test_model.png")}
        style={{ flex: 9, zIndex: 0 }}
        onLoadEnd={() => {
          setLoaded({
            tops: loaded.tops,
            pants: loaded.pants,
            outer: loaded.outer,
            person: true,
          });
          console.log("person ok");
        }}
      >
        {pants ? (
          <View style={{ zIndex: tuckIn.zIndex }}>
            <Item source={pants.image} width={270} />
          </View>
        ) : (
          <></>
        )}
        {tops ? (
          <View style={{ zIndex: 1 }}>
            <Item source={tops.image} width={220} />
          </View>
        ) : (
          <></>
        )}
        {outer ? (
          <View style={{ zIndex: 2 }}>
            <Item source={outer.image} width={outer.width} />
          </View>
        ) : (
          <></>
        )}
      </ImageBackground>
    </View>
  );
};

const menuStyle: ViewStyle = {
  justifyContent: "flex-end",
  alignItems: "center",
  width: 60,
  height: 60,
  padding: 3,
  margin: 15,
  backgroundColor: "#ddd",
};

export default CoordinationScreen;

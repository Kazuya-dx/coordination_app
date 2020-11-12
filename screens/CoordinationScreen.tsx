import React, { useState } from "react";
import { View, Text, ImageBackground, ViewStyle } from "react-native";
import Item from "../components/Item";

const CoordinationScreen: React.FC = () => {
  const [tops, setTops] = useState("");
  const [pants, setPants] = useState("");
  const [tuckIn, setTuckIn] = useState({
    check: false,
    display: "OFF",
    zIndex: 0,
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        <ImageBackground
          source={require("../assets/test_tops.png")}
          style={menuStyle}
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
        <ImageBackground
          source={require("../assets/test_pants.png")}
          style={menuStyle}
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
      >
        <View style={{ zIndex: tuckIn.zIndex }}>
          <Item source={require("../assets/test_pants.png")} width={270} />
        </View>
        <View style={{ zIndex: 1 }}>
          <Item source={require("../assets/test_tops.png")} width={220} />
        </View>
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

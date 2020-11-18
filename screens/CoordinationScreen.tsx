import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Item from "../components/Item";
import {
  setTopsLoading,
  setModelLoading,
  setPantsLoading,
  setOuterLoading,
} from "../stores/loading";

const CoordinationScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const tops = useSelector((state: any) => state.tops);
  const pants = useSelector((state: any) => state.pants);
  const outer = useSelector((state: any) => state.outer);
  const loading = useSelector((state: any) => state.loading);
  const [tuckIn, setTuckIn] = useState({
    check: false,
    display: "OFF",
    zIndex: 0,
  });

  return (
    <View style={{ flex: 1 }}>
      {(loading.tops || tops.image === "") &&
      (loading.pants || pants.image === "") &&
      (loading.outer || outer.image === "") &&
      loading.model ? (
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
            source={tops.image != "" ? tops.image : {}}
            style={menuStyle}
            onLoadEnd={() => {
              dispatch(setTopsLoading(""));
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
            source={pants.image != "" ? pants.image : {}}
            style={menuStyle}
            onLoadEnd={() => {
              dispatch(setPantsLoading(""));
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
            source={outer.image != "" ? outer.image : {}}
            style={menuStyle}
            onLoadEnd={() => {
              dispatch(setOuterLoading(""));
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
          dispatch(setModelLoading(""));
        }}
      >
        {pants ? (
          <View style={{ zIndex: tuckIn.zIndex }}>
            <Item source={pants.image} width={220} />
          </View>
        ) : (
          <></>
        )}
        {tops ? (
          <View style={{ zIndex: 1 }}>
            <Item source={tops.image} width={180} />
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

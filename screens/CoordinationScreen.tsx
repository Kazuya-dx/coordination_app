import React, {useState} from "react";
import { View, ImageBackground, Image} from "react-native";

const CoordinationScreen: React.FC = () => {
  const [pos, setPos] = useState({x: 0, y: 0})
  const [lastPress, setLastPress] = useState(0)
  return (
      <ImageBackground 
        source={require("../assets/test_model.png")} 
        style={{ flex: 1 }}>
        <View 
          onStartShouldSetResponder={e => true}
          onResponderMove={(e) => {
            let x = e.nativeEvent.pageY - 360
            let y = e.nativeEvent.pageX - 100
            setPos({x: x, y: y})
          }}
          onTouchStart={() => {
            // ダブルタップ処理
            const now = new Date().getTime();
            if ((now - lastPress) <= 250) {
              console.log("DOUBLE TAP")
            } 
            setLastPress(now)
          }}
        >
          <Image 
            style={{ position: "absolute", top: pos.x, left: pos.y, width: 190, resizeMode: "contain"}}
            source={require("../assets/test_tops.png")}
          />
        </View>
       
      </ImageBackground>
  );
};

export default CoordinationScreen;

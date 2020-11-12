import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";

type Props = {
  source: any;
  width: number;
};

const Item: React.FC<Props> = (props) => {
  const [onMove, setOnMove] = useState(false);
  const [border, setBorder] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [lastPress, setLastPress] = useState(0);

  useEffect(() => {
    if (onMove) {
      setBorder(1);
    } else {
      setBorder(0);
    }
  });

  return (
    <View
      onStartShouldSetResponder={(e) => true}
      onResponderMove={(e) => {
        let x = e.nativeEvent.pageY - 280;
        let y = e.nativeEvent.pageX - 120;
        setPos({ x: x, y: y });
      }}
      onTouchStart={() => {
        // ダブルタップ処理
        const now = new Date().getTime();
        if (now - lastPress <= 250) {
          console.log("DOUBLE TAP");
        }
        setLastPress(now);

        // onMoveの処理
        setOnMove(true);
      }}
      onTouchEnd={() => {
        setOnMove(false);
      }}
    >
      <Image
        style={{
          position: "absolute",
          top: pos.x,
          left: pos.y,
          height: props.width,
          width: props.width,
          resizeMode: "contain",
          borderWidth: border,
          borderColor: "#a1b",
        }}
        source={props.source}
      />
    </View>
  );
};

export default Item;

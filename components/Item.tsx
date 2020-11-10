import React, {useState} from "react";
import { View, Image } from "react-native";

const Item: React.FC = ({imageUrl}) => {
    const [pos, setPos] = useState({x: 0, y: 0})
    const [lastPress, setLastPress] = useState(0)
    return <View 
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
        source={require(imageUrl)}
        />
    </View>
}

export default Item;
import React, { useEffect, useState } from "react";
import { View, Text, Animated, Modal, Dimensions } from "react-native";
import styles from "./src/styles/styles";
import {
  handleButtonPress,
  startSlidingAnimation,
  slidingAnimation,
  createPanResponder,
} from "./src/utils/functions";
import { AntDesign } from "@expo/vector-icons";
import ShoppingListIcon from "./src/components/Icons";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const translateX = new Animated.Value(0);

  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    console.log("Aplikacja się uruchomiła!");
    startSlidingAnimation();
  }, []);

  const panResponder = createPanResponder(
    translateX,
    screenWidth,
    setIsModalVisible
  );

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} transparent={true} animationType="none">
        <Animated.View
          style={[styles.container, { transform: [{ translateX }] }]}
          {...panResponder.panHandlers}
        >
          <Text style={styles.text} onPress={handleButtonPress}>
            🍔 Co dziś zjemy? 🍔
          </Text>
          <Animated.View
            style={{
              flexDirection: "row",
              alignItems: "center",
              transform: [{ translateX: slidingAnimation }],
            }}
          >
            <AntDesign
              name="arrowleft"
              size={35}
              color="#FFFFFF"
              style={styles.arrowIcon}
            />
            <Text style={styles.swipeText}>Przewiń</Text>
            <AntDesign
              name="arrowleft"
              size={35}
              color="#FFFFFF"
              style={styles.arrowIcon}
            />
          </Animated.View>
        </Animated.View>
      </Modal>

      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Główny Ekran</Text>
        <ShoppingListIcon
          onPress={() => console.log("Kliknięto ikonę listy zakupów")}
        />
      </View>
    </View>
  );
}

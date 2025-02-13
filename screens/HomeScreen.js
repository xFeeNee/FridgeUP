import React, { useState } from "react";
import { View, Text, Modal, Animated, Dimensions } from "react-native";
import styles from "../src/styles/styles";
import { createPanResponder } from "../src/utils/functions";
import ShoppingListIcon from "../src/components/Icons";
import EntryModalScreen from "./EntryModalScreen";

export default function HomeScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const translateX = new Animated.Value(0);
  const screenWidth = Dimensions.get("window").width;

  const panResponder = createPanResponder(
    translateX,
    screenWidth,
    setIsModalVisible
  );

  return (
    <View style={styles.container}>
      <EntryModalScreen
        isVisible={isModalVisible}
        translateX={translateX}
        panResponder={panResponder}
      />
      <View style={styles.headerStyle}>
        <Text style={styles.topBarText}>Wybierz co chcesz zrobić</Text>
        <ShoppingListIcon onPress={() => navigation.navigate("ShoppingList")} />
      </View>
    </View>
  );
}

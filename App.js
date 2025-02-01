import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  PanResponder,
  Animated,
  Modal,
  Button,
  Dimensions,
} from "react-native";
import styles from "./src/styles/styles";
import { handleButtonPress } from "./src/utils/functions";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const translateX = new Animated.Value(0);

  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    console.log("Aplikacja się uruchomiła!");
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return (
        Math.abs(gestureState.dx) > 5 &&
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
      );
    },
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx < 0) {
        translateX.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx < -screenWidth / 4) {
        Animated.timing(translateX, {
          toValue: -screenWidth,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setIsModalVisible(false));
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

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
          <View style={styles.swipeContainer}>
            <AntDesign
              name="arrowleft"
              size={35}
              color="#FFFFFF"
              style={styles.leftarrowIcon}
            />
            <Text style={styles.swipeText}>Przewiń</Text>
            <AntDesign
              name="arrowleft"
              size={35}
              color="#FFFFFF"
              style={styles.leftarrowIcon}
            />
          </View>
        </Animated.View>
      </Modal>

      {!isModalVisible && (
        <View style={styles.mainScreen}>
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>Główny Ekran</Text>
          </View>
          <View style={styles.mainContentArea}>
            <Text style={styles.text}>
              To jest nowy główny ekran aplikacji!
            </Text>
          </View>
          <View style={styles.bottomBar}>
            <Button
              title="Wróć do modalu"
              onPress={() => setIsModalVisible(true)}
            />
          </View>
        </View>
      )}
    </View>
  );
}

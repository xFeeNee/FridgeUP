import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SwipeIndicators() {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [slideAnim]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  arrowIcon: {
    marginHorizontal: 5,
  },
  swipeText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});

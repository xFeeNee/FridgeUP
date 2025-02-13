import React from "react";
import { Modal, Animated, Text } from "react-native";
import styles from "../src/styles/styles";
import SwipeIndicator from "../src/components/SwipeIndicators";

export default function ModalScreen({ isVisible, translateX, panResponder }) {
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade">
      <Animated.View
        style={[styles.container, { transform: [{ translateX }] }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.text}>🍔 Co dziś zjemy? 🍔</Text>
        <SwipeIndicator />
      </Animated.View>
    </Modal>
  );
}

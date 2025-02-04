import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../src/styles/styles";

export default function ShoppingListScreen() {
  return (
    <View style={styles.topBar}>
      <Text style={styles.topBarText}>Lista Zakupów 🛒</Text>
    </View>
  );
}

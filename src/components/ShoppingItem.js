import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/styles";

export default function ShoppingItem({ item, toggleItem }) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => toggleItem(item.id)}
        style={styles.checkbox}
      >
        {item.checked && (
          <Ionicons name="checkmark-circle" size={24} color="green" />
        )}
        {!item.checked && (
          <Ionicons name="ellipse-outline" size={24} color="gray" />
        )}
      </TouchableOpacity>
      <Text style={[styles.itemText, item.checked && styles.itemTextChecked]}>
        {item.text}
      </Text>
    </View>
  );
}

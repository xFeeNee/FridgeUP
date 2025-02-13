import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function ShoppingListIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      <Image
        source={require("./../assets/shoppingList.png")}
        style={styles.iconImage}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    marginTop: 0,
    top: 100,
    left: 10,
    alignSelf: "flex-start",
  },
  iconImage: {
    width: 190,
    height: 190,
    resizeMode: "contain",
  },
});

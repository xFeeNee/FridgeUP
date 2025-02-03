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
    marginTop: 50,
    padding: 10,
    alignSelf: "flex-start",
  },
  iconImage: {
    width: 190,
    height: 190,
    resizeMode: "contain",
  },
});

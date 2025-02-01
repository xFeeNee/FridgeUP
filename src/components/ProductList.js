import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

export default function ProductList({ products }) {
  if (products.length === 0) {
    return <Text style={styles.empty}>Brak produktów w lodówce.</Text>;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.item}>
            {item.name} - {item.quantity}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  item: {
    fontSize: 18,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
});

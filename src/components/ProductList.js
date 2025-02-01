import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

export default function ProductList({ products }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Text style={styles.item}>
          {item.name} - {item.quantity}
        </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

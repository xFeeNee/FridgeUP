import React, { useState } from "react";
import { TextInput, Button, StyleSheet, View, Alert } from "react-native";

export default function ProductForm({ onSave }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () => {
    if (productName.trim() === "" || quantity.trim() === "") {
      Alert.alert("Błąd", "Proszę wypełnić wszystkie pola.");
      return;
    }
    onSave({ name: productName, quantity });
    setProductName("");
    setQuantity("");
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nazwa produktu"
        value={productName}
        onChangeText={setProductName}
      />
      <TextInput
        style={styles.input}
        placeholder="Ilość (g/szt.)"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button title="Dodaj produkt" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

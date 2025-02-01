import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import QRScanner from "./components/QRScanner";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { loadProducts, saveProduct } from "./utils/storage";
import styles from "./styles/styles";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const storedProducts = await loadProducts();
        setProducts(storedProducts);
      } catch (error) {
        console.error("Błąd podczas ładowania produktów:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSaveProduct = async (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    await saveProduct(updatedProducts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FridgeUp 🧊</Text>
      <QRScanner
        onScanned={(data) => handleSaveProduct({ name: data, quantity: "" })}
      />
      <ProductForm onSave={handleSaveProduct} />
      <ProductList products={products} />
    </View>
  );
}

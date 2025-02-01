import AsyncStorage from "@react-native-async-storage/async-storage";

const loadProducts = async () => {
  try {
    const products = await AsyncStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.error("Błąd przy ładowaniu produktów:", error);
    return [];
  }
};

const saveProduct = async (products) => {
  try {
    await AsyncStorage.setItem("products", JSON.stringify(products));
  } catch (error) {
    console.error("Błąd przy zapisywaniu produktów:", error);
  }
};

export { loadProducts, saveProduct };

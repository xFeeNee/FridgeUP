import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTopBarNavigation from "../navigation/TopBarNavigation";
import ShoppingItem from "../components/ShoppingItem";
import styles from "../src/styles/styles";

export default function ShoppingListScreen({ navigation }) {
  useTopBarNavigation(navigation, "Lista zakupów");

  const [items, setItems] = useState([]); // Lista zakupów
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState("");

  // Dodanie nowej pozycji do listy
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([
        ...items,
        { id: Date.now().toString(), text: newItem, checked: false },
      ]);
      setNewItem("");
      setModalVisible(false);
    }
  };

  // Przełączanie stanu checkboxa
  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Dodanie ikonki "+" do topbara
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addButton}
        >
          <Ionicons name="add-circle-outline" size={28} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Lista zakupów */}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShoppingItem item={item} toggleItem={toggleItem} />
        )}
      />

      {/* Modal dodawania nowego elementu */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Dodaj produkt</Text>
            <TextInput
              style={styles.input}
              placeholder="Wpisz produkt..."
              value={newItem}
              onChangeText={setNewItem}
            />
            <TouchableOpacity onPress={addItem} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Dodaj</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalCancel}
            >
              <Text style={styles.modalButtonText}>Anuluj</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

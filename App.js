import React, { useEffect, useState } from "react";
import { View, Text, Animated, Modal, Dimensions } from "react-native";
import styles from "./src/styles/styles";
import {
  handleButtonPress,
  startSlidingAnimation,
  slidingAnimation,
  createPanResponder,
} from "./src/utils/functions";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingListIcon from "./src/components/Icons";
import ShoppingListScreen from "./screens/ShoppingListScreen";
import SwipeIndicator from "./src/components/SwipeIndicators";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const translateX = new Animated.Value(0);

  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    console.log("Aplikacja się uruchomiła!");
    startSlidingAnimation();
  }, []);

  const panResponder = createPanResponder(
    translateX,
    screenWidth,
    setIsModalVisible
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {({ navigation }) => (
            <View style={styles.container}>
              <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
              >
                <Animated.View
                  style={[styles.container, { transform: [{ translateX }] }]}
                  {...panResponder.panHandlers}
                >
                  <Text style={styles.text}>🍔 Co dziś zjemy? 🍔</Text>
                  <SwipeIndicator />
                </Animated.View>
              </Modal>
              <View style={styles.topBar}>
                <Text style={styles.topBarText}>Wybierz co chcesz zrobić</Text>
                <ShoppingListIcon
                  onPress={() => navigation.navigate("ShoppingList")}
                />
              </View>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="ShoppingList"
          component={ShoppingListScreen}
          options={{ title: "Lista Zakupów" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation/MainScreenNavigation";
import HomeScreen from "./screens/HomeScreen";
import ShoppingListScreen from "./screens/ShoppingListScreen";

export default function App() {
  const screens = [
    { name: "Home", component: HomeScreen, options: { headerShown: false } },
    {
      name: "ShoppingList",
      component: ShoppingListScreen,
      options: { title: "Lista Zakupów" },
    },
  ];

  return (
    <NavigationContainer>
      <Navigation screens={screens} />
    </NavigationContainer>
  );
}

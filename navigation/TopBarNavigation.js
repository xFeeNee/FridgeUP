import { useLayoutEffect } from "react";
import styles from "../src/styles/styles"; // Import globalnych stylów

export default function useTopBarNavigation(navigation, title) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitle,
      headerTintColor: "#fff",
      headerBackTitleVisible: false,
    });
  }, [navigation, title]);
}

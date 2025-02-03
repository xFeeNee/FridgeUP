import { Animated, PanResponder } from "react-native";

export const slidingAnimation = new Animated.Value(0);

export const startSlidingAnimation = () => {
  Animated.loop(
    Animated.sequence([
      Animated.timing(slidingAnimation, {
        toValue: -20,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slidingAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  ).start();
};

export const createPanResponder = (
  translateX,
  screenWidth,
  setIsModalVisible
) => {
  return PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return (
        Math.abs(gestureState.dx) > 5 &&
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
      );
    },
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx < 0) {
        translateX.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx < -screenWidth / 4) {
        Animated.timing(translateX, {
          toValue: -screenWidth,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setIsModalVisible(false));
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });
};

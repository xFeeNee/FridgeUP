import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 20,
  },
  swipeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  swipeText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginRight: 8,
  },
  arrowIcon: {
    marginLeft: 5,
  },
  mainScreen: {
    flex: 1,
    backgroundColor: "#ADD8E6",
  },
  topBar: {
    height: 60,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
    alignItems: "center",
  },
  topBarText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  bottomBarFixed: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#87CEEB",
    justifyContent: "center",
    alignItems: "center",
    width: width, // Użycie szerokości ekranu
  },
  mainContentArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60, // Aby uniknąć nachodzenia na bottom bar
  },
});

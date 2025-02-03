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

  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 76,
    backgroundColor: "#4FC3F7", // Kolor tła
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1,
    marginBottom: 20,
  },

  topBarText: {
    color: "#F2F2F2",
    top: 33,
    fontSize: 20,
    fontWeight: "bold",
  },
});

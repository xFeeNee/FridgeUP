import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  addButton: {
    marginRight: 15,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  checkbox: {
    fontSize: 18,
  },
  itemText: {
    fontSize: 18,
  },
  itemTextChecked: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: "#4DB6AC",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  modalCancel: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },

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
  headerStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100, // Większa wysokość dla efektu zaokrąglenia
    backgroundColor: "#4FC3F7", // Kolor nagłówka
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30, // Zaokrąglone rogi
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  headerTitle: {
    color: "#F2F2F2",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
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

  topBarText: {
    color: "#F2F2F2",
    top: 33,
    fontSize: 20,
    fontWeight: "bold",
  },
});

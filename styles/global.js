import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  categoryContainer: {
    marginTop: 15,
    marginLeft: 10,
  },
  gamesContainer: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  categoryItem: {
    marginRight: 10,
    borderRadius: 30,
    padding: 15,
    backgroundColor: "#F5F5F5",
  },
  currentCategoryItem: {
    backgroundColor: "#F7E5E7",
    fontWeight: "bold",
  },
  cardItem: {
    width: 150,
    height: 150,
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
    borderRadius: 20,
  },
});

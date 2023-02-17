import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  filterOptions: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  categoryItem: {
    margin: 10,
  },
  cardItem: {
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 5,
    borderRadius: 20,
    padding: 10,
  },
});

import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.push("GameList");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Gamepedia</Text>
      <Text>Discover the hotest and the latest games!</Text>
      <Button title="Get started" onPress={pressHandler} />
    </View>
  );
}

import React from "react";
import { View, Text } from "react-native";

export default function GameItem({ navigation }) {
  return (
    <View>
      <Text>Individual Game page</Text>
      <Text>{navigation.getParam("id")}</Text>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("description")}</Text>
      <Text>{navigation.getParam("genre")}</Text>
      <Text>{navigation.getParam("developer")}</Text>
    </View>
  );
}

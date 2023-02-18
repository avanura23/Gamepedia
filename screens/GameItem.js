import React from "react";
import { View, Text } from "react-native";

export default function GameItem({ navigation }) {
  const { id, title, description, genre, developer } =
    navigation.getParam("props");

  return (
    <View>
      <Text>Individual Game page</Text>
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{genre}</Text>
      <Text>{developer}</Text>
    </View>
  );
}

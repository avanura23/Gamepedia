import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function GameList({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const [category, setCategory] = React.useState([
    { name: "MMORPG", key: "1" },
    { name: "Shooter", key: "2" },
    { name: "MOBA", key: "3" },
    { name: "Anime", key: "4" },
    { name: "Battle Royale", key: "5" },
    { name: "Strategy", key: "6" },
    { name: "Fantasy", key: "7" },
    { name: "Sci-Fi", key: "8" },
    { name: "Card Games", key: "9" },
    { name: "Racing", key: "10" },
    { name: "Fighting", key: "11" },
    { name: "Social", key: "12" },
    { name: "Sports", key: "13" },
  ]);

  const [currCategory, setCurrCategory] = React.useState("");
  const [categoryGames, setCategoryGames] = React.useState([]);

  async function pressCategory(categoryName) {
    const url = "https://www.freetogame.com/api/games?category=" + categoryName;
    const res = await fetch(url);
    const resJson = await res.json();
    setCategoryGames(resJson);
  }

  return (
    <View>
      <View style={globalStyles.container}>
        <Text>GameList Screen</Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={category}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressCategory(item.name)}>
              <Text style={globalStyles.categoryItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <FlatList
          data={categoryGames}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={globalStyles.cardItem}>
                <Text>{item.title}</Text>
                <Text>{item.short_description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

import React from "react";
import GameItem from "./GameItem";
import Navigator from "../routes/homeStack";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { globalStyles } from "../styles/global";
import { FontAwesome } from "@expo/vector-icons";

export default function GameList({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  const [category, setCategory] = React.useState([
    { name: "MMORPG", key: "1" },
    { name: "Shooter", key: "2" },
    { name: "MOBA", key: "3" },
    { name: "Anime", key: "4" },
    { name: "Battle-Royale", key: "5" },
    { name: "Strategy", key: "6" },
    { name: "Fantasy", key: "7" },
    { name: "Sci-Fi", key: "8" },
    { name: "Card", key: "9" },
    { name: "Racing", key: "10" },
    { name: "Fighting", key: "11" },
    { name: "Social", key: "12" },
    { name: "Sports", key: "13" },
  ]);

  const [currCategory, setCurrCategory] = React.useState("MMORPG");
  const [categoryGames, setCategoryGames] = React.useState([]);

  React.useEffect(() => {
    pressCategory(currCategory);
  }, []);

  async function pressCategory(categoryName) {
    const url = "https://www.freetogame.com/api/games?category=" + categoryName;
    const res = await fetch(url);
    const resJson = await res.json();

    setCurrCategory(categoryName);
    setCategoryGames(resJson);
  }

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.categoryContainer}>
        <FlatList
          horizontal
          data={category}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressCategory(item.name)}>
              {currCategory == item.name ? (
                <View
                  style={[
                    globalStyles.categoryItem,
                    globalStyles.currentCategoryItem,
                  ]}
                >
                  <Text
                    style={{
                      color: "#E34A5A",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              ) : (
                <View style={globalStyles.categoryItem}>
                  <Text>{item.name}</Text>
                </View>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={globalStyles.gamesContainer}>
        {categoryGames && (
          <FlatList
            numColumns={2}
            data={categoryGames}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ImageBackground
                  style={{
                    justifyContent: "flex-end",
                    width: (screenWidth - 50) * 0.5,
                    height: 250,
                    margin: 10,
                  }}
                  imageStyle={{
                    borderRadius: 35,
                  }}
                  source={{ uri: item.thumbnail }}
                >
                  <View
                    style={{
                      height: 100,
                      width: (screenWidth - 50) * 0.5,
                      borderBottomRightRadius: 35,
                      borderBottomLeftRadius: 35,
                      backgroundColor: "#E34A5A",
                      opacity: 0.8,
                    }}
                  ></View>
                  <View
                    style={{
                      width: (screenWidth - 50) * 0.5,
                      paddingHorizontal: 10,
                      position: "absolute",
                      transform: [{ translateY: -25 }],
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                    >
                      {item.title.length <= 12
                        ? item.title.replace(/\r?\n|\r/g, " ")
                        : item.title
                            .replace(/\r?\n|\r/g, " ")
                            .substring(0, 12) + "..."}
                    </Text>
                    <Text style={{ color: "#fff", marginBottom: 10 }}>
                      {item.developer.length <= 18
                        ? item.developer.replace(/\r?\n|\r/g, " ")
                        : item.developer
                            .replace(/\r?\n|\r/g, " ")
                            .substring(0, 18) + "..."}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      {item.platform
                        .split(",")
                        .map((e) =>
                          e.includes("PC") ? (
                            <FontAwesome
                              key={e}
                              style={{ marginRight: 10 }}
                              color="#fff"
                              size={18}
                              name="windows"
                            />
                          ) : (
                            <FontAwesome
                              key={e}
                              style={{ marginRight: 10 }}
                              color="#fff"
                              size={18}
                              name="chrome"
                            />
                          )
                        )}
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}

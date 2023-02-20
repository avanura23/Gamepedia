import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function GameItem({ navigation }) {
  const {
    id,
    title,
    description,
    genre,
    release_date,
    developer,
    thumbnail,
    platform,
    screenshots,
    minimum_system_requirements,
  } = navigation.getParam("props");

  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

  const [seeMore, setSeeMore] = React.useState(
    description.length > 200 ? true : false
  );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={{ uri: thumbnail }}
        style={{
          flexGrow: 2,
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            bottom: screenHeight / 20 + 24,
            backgroundColor: "#E34A5A",
            width: screenWidth * 0.75,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            paddingLeft: 10,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
              }}
            >
              {genre}
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {platform
                .split(",")
                .map((e) =>
                  e.includes("Windows") ? (
                    <FontAwesome
                      key={e}
                      style={{ marginRight: 20 }}
                      color="#fff"
                      name="windows"
                      size={18}
                    />
                  ) : (
                    <FontAwesome
                      key={e}
                      style={{ marginRight: 20 }}
                      color="#fff"
                      name="chrome"
                      size={18}
                    />
                  )
                )}
            </View>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          marginTop: -screenHeight / 20,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          flexGrow: 3,
          flex: 1,
          backgroundColor: "#fff",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "40%",
            borderRadius: 10,
            height: 10,
            backgroundColor: "#000",
            marginBottom: 20,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "25%",
            paddingHorizontal: 10,
            marginBottom: 20,
            borderRadius: 25,
            height: 50,
            backgroundColor: "#E9E9E9",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome color="#E34A5A" name="calendar" size={18} />
            <Text style={{ marginLeft: 15 }}>
              {release_date ? release_date : "?"}
            </Text>
          </View>
        </View>
        <ScrollView style={{ paddingHorizontal: 10, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            Developer
          </Text>
          <Text
            style={{
              color: "#9F9C9F",
            }}
          >
            {developer}
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 5,
              marginTop: 20,
            }}
          >
            About Game
          </Text>
          <Text
            numberOfLines={seeMore ? 5 : 1000}
            style={{
              color: "#9F9C9F",
            }}
          >
            {description}
          </Text>

          <TouchableOpacity
            style={{
              marginBottom: 10,
            }}
            onPress={() => {
              setSeeMore(!seeMore);
            }}
          >
            <Text
              style={{
                color: "#E34A5A",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {seeMore ? "See More" : "See Less"}
            </Text>
          </TouchableOpacity>
          {minimum_system_requirements && (
            <>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                Minimum System Requirements
              </Text>
              {minimum_system_requirements.os && (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Operating System
                  </Text>
                  <Text style={{ color: "#9F9C9F" }}>
                    {minimum_system_requirements.os}
                  </Text>
                </>
              )}
              {minimum_system_requirements.processor && (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Processor
                  </Text>
                  <Text style={{ color: "#9F9C9F" }}>
                    {minimum_system_requirements.processor}
                  </Text>
                </>
              )}
              {minimum_system_requirements.memory && (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Memory
                  </Text>
                  <Text style={{ color: "#9F9C9F" }}>
                    {minimum_system_requirements.memory}
                  </Text>
                </>
              )}
              {minimum_system_requirements.graphics && (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Graphics
                  </Text>
                  <Text style={{ color: "#9F9C9F" }}>
                    {minimum_system_requirements.graphics}
                  </Text>
                </>
              )}
              {minimum_system_requirements.storage && (
                <>
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Storage
                  </Text>
                  <Text style={{ color: "#9F9C9F" }}>
                    {minimum_system_requirements.storage}
                  </Text>
                </>
              )}
            </>
          )}
          {screenshots && (
            <>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginBottom: 5,
                  marginTop: 10,
                }}
              >
                Screenshots
              </Text>
              <FlatList
                horizontal
                data={screenshots}
                renderItem={({ item }) => {
                  return (
                    <Image
                      style={{
                        width: screenWidth * 0.9,
                        height: 200,
                        marginRight: 20,
                      }}
                      source={{ uri: item.image }}
                    />
                  );
                }}
              />
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

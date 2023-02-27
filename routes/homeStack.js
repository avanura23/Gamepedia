import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import GameList from "../screens/GameList";
import GameItem from "../screens/GameItem";

const screens = {
  GameList: {
    screen: GameList,
    navigationOptions: {
      headerShown: false,
    },
  },
  GameItem: {
    screen: GameItem,
    navigationOptions: {
      headerShown: false,
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

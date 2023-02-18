import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import GameList from "../screens/GameList";
import GameItem from "../screens/GameItem";

const screens = {
  Home: {
    screen: Home,
  },
  GameList: {
    screen: GameList,
  },
  GameItem: {
    screen: GameItem,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

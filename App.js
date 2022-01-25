import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import SearchScreen from './src/screens/SearchScreen';
import ShowResultsScreen from './src/screens/ShowResultsScreen';
import TextSentimentScreen from './src/screens/TextSentimentScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
    Search: SearchScreen,
    ShowResults: ShowResultsScreen,
    TextSentiment: TextSentimentScreen


  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Stackathon',
    },
  }
);

export default createAppContainer(navigator);

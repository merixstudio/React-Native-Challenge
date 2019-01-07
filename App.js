import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { HomeScreen } from './pages/home';
import { BookDetailsScreen } from './pages/book-details';
import { SearchResultsScreen } from './pages/search-results';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    BookDetails: {
      screen: BookDetailsScreen,
    },
    SearchResults: {
      screen: SearchResultsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


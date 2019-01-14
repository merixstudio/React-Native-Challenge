import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './pages/home';
import BookDetailsScreen from './pages/bookDetails';
import SearchResultsScreen from './pages/searchResults';

import store from './app/store';

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
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}

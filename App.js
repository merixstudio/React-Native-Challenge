import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import store from './app/store/store';
import BookSearchNavigator from './app/modules/BooksSearch/routing';

const AppContainer = createAppContainer(BookSearchNavigator);

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <AppContainer />
      </Provider>
    );
  }
}

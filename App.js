import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import BookSearchNavigator from './app/modules/BooksSearch/routing';
import store from './app/store/store';

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

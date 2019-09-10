import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { Root } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import BookSearchNavigator from './app/modules/BookSearch/routing';
import store from './app/store/store';

const AppContainer = createAppContainer(BookSearchNavigator);

const Roboto = require('native-base/Fonts/Roboto.ttf');
const RobotoMedium = require('native-base/Fonts/Roboto_medium.ttf');

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto,
      Roboto_medium: RobotoMedium,
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <Provider store={ store }>
          <AppContainer />
        </Provider>
      </Root>
    );
  }
}

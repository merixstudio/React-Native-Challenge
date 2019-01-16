import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import SearchForm from '../app/components/searchForm/searchForm';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(query) {
    const { navigation } = this.props;
    navigation.navigate('SearchResults', { query });
  }

  render() {
    return (
      <View>
        <SearchForm
          onSubmit={ values => this.handleSearchSubmit(values.search) }
        />
        <View style={ {
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center',
        } }
        >
          <Text> Google Books Search </Text>
          <Text> React Native Expo Demo </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(HomeScreen);

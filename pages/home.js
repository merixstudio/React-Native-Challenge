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
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>Search for book</Text>
        <SearchForm onSubmit={ values => this.handleSearchSubmit(values.search) } />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(HomeScreen);

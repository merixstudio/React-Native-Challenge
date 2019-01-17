import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import SearchForm from '../../../../common/searchForm/searchForm';

export class BookSearch extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(query) {
    if (!query) return;
    const { navigation } = this.props;
    navigation.navigate('BookSearchResults', { query });
  }

  render() {
    return (
      <View>
        <SearchForm
          placeholder="Search for books..."
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

export default connect(mapStateToProps)(BookSearch);

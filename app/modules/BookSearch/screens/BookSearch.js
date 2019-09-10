import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import SearchForm from '../../../common/searchForm';

function BookSearch({ navigation }) {
  const [value, onChange] = useState('');

  const handleSearchSubmit = (query) => {
    if (!query) return;
    navigation.navigate('BookSearchResults', { query });
  };

  return (
    <View style={ { flex: 1 } }>
      <SearchForm
        placeholder="Search for books..."
        onSubmit={ handleSearchSubmit }
        onChange={ onChange }
        value={ value }
      />
      <View
        style={ {
          flex: 1,
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

BookSearch.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BookSearch);

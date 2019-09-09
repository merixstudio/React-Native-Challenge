import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import SearchForm from '../../../common/searchForm';

class BookSearch extends React.Component {
  static navigationOptions() {
    return { header: null };
  }

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = value => {
    this.setState({ value });
  };

  handleSearchSubmit = query => {
    if (!query) return;
    const { navigation } = this.props;
    navigation.navigate('BookSearchResults', { query });
  };

  render() {
    const { value } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <SearchForm
          placeholder="Search for books..."
          onSubmit={this.handleSearchSubmit}
          onChange={this.onChange}
          value={value}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
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

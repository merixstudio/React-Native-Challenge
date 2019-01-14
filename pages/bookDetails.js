import React from 'react';
import { Button, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { fetchBookDetails } from '../app/actions/bookActions';

export class BookDetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.fetchBookDetails = this.fetchBookDetails.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    this.fetchBookDetails(id);
  }

  fetchBookDetails(id) {
    const { actions } = this.props;
    actions.fetchBookDetails(id);
  }

  render() {
    const { books, navigation } = this.props;
    const { current, isFetching } = books;

    return !isFetching && current ? (
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text>Book Details </Text>
        <Text>
          { current.volumeInfo.title }
        </Text>
        <Text>
          { current.volumeInfo.subtitle }
        </Text>
        <Button title="Go to Results" onPress={ () => navigation.push('SearchResults') } />
        <Button title="Go to Home" onPress={ () => navigation.navigate('Home') } />
      </View>
    ) : (
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text> Loading </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBookDetails }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookDetailsScreen);

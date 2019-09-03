import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { Text, Container } from 'native-base';

import BookSearchResultsItem from '../components/BookSearchResultsItem';
import SearchForm from '../../../common/searchForm';
import RenderError from '../../../common/error';
import RenderMessage from '../../../common/message';

import { fetchBooks } from '../../../store/actions/bookActions';

class BookSearchResults extends React.Component {
  static navigationOptions() {
    return { header: null };
  }

  constructor(props) {
    super(props);

    this.fetchBooks = this.fetchBooks.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  onPressItem(id) {
    const { navigation } = this.props;
    navigation.navigate('BookSearchItemDetails', { id });
  }

  fetchBooks(phrase) {
    const { navigation, actions } = this.props;
    const query = phrase || navigation.getParam('query', 'NO-ID');
    if (query) {
      actions.fetchBooks(query);
    }
  }

  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    return <BookSearchResultsItem item={ item } onPressItem={ this.onPressItem } />;
  }

  render() {
    const {
      isFetching, results, query, error,
    } = this.props;

    if (isFetching) {
      return <RenderMessage message="Loading..." />;
    }
    if (error) {
      return <RenderError error={ error } />;
    }
    if (results && results.items) {
      return (
        <Container style={ { flex: 1, justifyContent: 'center' } }>
          <SearchForm
            placeholder="Search for books..."
            onSubmit={ values => this.fetchBooks(values.search) }
            initialValues={ { search: query } }
          />
          <FlatList
            data={ results.items }
            keyExtractor={ this.keyExtractor }
            renderItem={ this.renderItem }
          />
        </Container>
      );
    }
    return (
      <Container>
        <SearchForm
          placeholder="Search for books..."
          onSubmit={ values => this.fetchBooks(values.search) }
          initialValues={ { search: query } }
        />
        <View
          style={ {
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          } }
        >
          <Text>No results for this phrase...</Text>
        </View>
      </Container>
    );
  }
}

BookSearchResults.propTypes = {
  results: PropTypes.oneOfType([
    PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          volumeInfo: PropTypes.shape({
            imageLinks: PropTypes.shape({
              smallThumbnail: PropTypes.string,
            }),
            title: PropTypes.string,
            description: PropTypes.string,
          }),
        }),
      ),
    }),
    PropTypes.shape({ totalItems: PropTypes.number }),
  ]),
  isFetching: PropTypes.bool.isRequired,
  query: PropTypes.string,
  error: PropTypes.shape({
    status: PropTypes.number,
    data: PropTypes.string,
  }),
  actions: PropTypes.shape({
    fetchBooks: PropTypes.func,
  }).isRequired,
};

BookSearchResults.defaultProps = {
  results: null,
  query: '',
  error: null,
};

const mapStateToProps = state => ({
  results: state.books.results,
  isFetching: state.books.isFetching,
  query: state.books.query,
  error: state.books.error,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBooks }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSearchResults);

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import {
  Text,
  Container,
  Content,
  Header,
  Left,
  Icon,
  Body,
  Button,
  Title,
  Right,
} from 'native-base';

import BookSearchResultsItem from '../components/BookSearchResultsItem';
import RenderError from '../../../common/error';
import RenderMessage from '../../../common/message';

import { fetchBooks } from '../../../store/actions/bookActions';

class BookSearchResults extends React.Component {
  static navigationOptions() {
    return { header: null };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  onPressItem = id => {
    const { navigation } = this.props;
    navigation.navigate('BookSearchItemDetails', { id });
  };

  fetchBooks = phrase => {
    const { navigation, fetchBooks } = this.props;
    const query = phrase || navigation.getParam('query', 'NO-ID');
    if (query) {
      fetchBooks(query);
    }
  };

  keyExtractor = item => item.id;

  renderItem = ({ item }) => <BookSearchResultsItem item={item} onPressItem={this.onPressItem} />;

  render() {
    const { isFetching, results, error, navigation } = this.props;

    const data = (results && results.items) || [];

    if (isFetching) {
      return <RenderMessage message="Loading..." />;
    }
    if (error) {
      return <RenderError error={error} />;
    }
    return (
      <Container style={{ flex: 1, justifyContent: 'center' }}>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Search results</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            data={data}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ListEmptyComponent={<Text>No books found...</Text>}
          />
        </Content>
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
  error: PropTypes.shape({
    status: PropTypes.number,
    data: PropTypes.string,
  }),
};

BookSearchResults.defaultProps = {
  results: null,
  error: null,
};

const mapStateToProps = state => ({
  results: state.books.results,
  isFetching: state.books.isFetching,
  query: state.books.query,
  error: state.books.error,
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: phrase => dispatch(fetchBooks(phrase)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSearchResults);

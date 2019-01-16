import React from 'react';
import { bindActionCreators } from 'redux';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  Thumbnail,
  Button,
  ListItem,
  Text,
  Right,
  Body,
} from 'native-base';
import { fetchBooks } from '../app/actions/bookActions';
import SearchForm from '../app/components/searchForm/searchForm';
import RenderError from '../app/components/error/error';
import RenderMessage from '../app/components/message/message';

export class SearchResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.fetchBooks = this.fetchBooks.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;
    const query = navigation.getParam('query', 'NO-ID');
    this.fetchBooks(query);
  }

  onPressItem(id) {
    const { navigation } = this.props;
    navigation.navigate('BookDetails', { id });
  }

  fetchBooks(query) {
    if (!query) return;
    const { actions } = this.props;
    actions.fetchBooks(query);
  }

  keyExtractor(item) {
    return item.id;
  }

  renderItem({ item }) {
    return (
      <ListItem
        thumbnail
        onPress={ () => this.onPressItem(item.id) }
      >
        <Thumbnail
          square
          source={ {
            uri: item.volumeInfo.imageLinks
              ? item.volumeInfo.imageLinks.smallThumbnail
              : '/assets/icon.png',
          } }
        />
        <Body>
          <Text>
            { item.volumeInfo.title }
          </Text>
          <Text note numberOfLines={ 1 }>{item.volumeInfo.description}</Text>
        </Body>
        <Right>
          <Button transparent onPress={ () => this.onPressItem(item.id) }>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }

  render() {
    const { books } = this.props;
    const {
      isFetching,
      results,
      query,
      error,
    } = books;

    if (!isFetching && results && results.items) {
      return (
        <View style={ { flex: 1, justifyContent: 'center' } }>
          <SearchForm
            onSubmit={ values => this.fetchBooks(values.search) }
            initialValues={ { search: query } }
          />
          <FlatList
            data={ results.items }
            keyExtractor={ this.keyExtractor }
            renderItem={ this.renderItem }
          />
        </View>
      );
    }
    if (!isFetching && error) { return (<RenderError error={ error } />); }
    if (!isFetching && results && !results.items) {
      return (
        <View>
          <SearchForm
            onSubmit={ values => this.fetchBooks(values.search) }
            initialValues={ { search: query } }
          />
          <View style={ {
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          } }
          >
            <Text>
            No results for this phrase...
            </Text>
          </View>
        </View>
      );
    }
    return (<RenderMessage message="Loading..." />);
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBooks }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultsScreen);

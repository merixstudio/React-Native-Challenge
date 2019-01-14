import React from "react";
import { Button, View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchBooks } from "../app/actions/bookActions";
import { bindActionCreators } from "redux";
import SearchForm from "../app/components/searchForm/searchForm";
import ListItem from '../app/components/listItem/listItem';

export class SearchResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.fetchBooks = this.fetchBooks.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    this.onPressItem = this.onPressItem.bind(this);
  }
  componentDidMount() {
    const { navigation } = this.props;
    const query = navigation.getParam("query", "NO-ID");
    this.fetchBooks(query);
  }

  fetchBooks(query) {
    this.props.actions.fetchBooks(query);
  }

  keyExtractor(item, index) {
    return item.id;
  }

  onPressItem (id)  {
   this.props.navigation.navigate('BookDetails', {id});
  };

  renderItem = ({ item }) => (
    <ListItem
      id={item.id}
      onPressItem={this.onPressItem}
      title={item.volumeInfo.title}
    />
  );

  render() {
    const { isFetching, results } = this.props.books;
    return isFetching || !results ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Loading </Text>
      </View>
    ) : (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Search Results Screen</Text>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
        <SearchForm onSubmit={values => this.fetchBooks(values.search)} />
        <FlatList
          data={this.props.books.results.items}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBooks }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsScreen);

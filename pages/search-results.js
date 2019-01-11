import React from "react";
import { Button, View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchBooks } from "../app/actions/bookActions";
import { bindActionCreators } from "redux";

const onSetTests = payload => {
  return {
    type: "SET_TEST",
    payload
  };
};

export class SearchResultsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.test = this.test.bind(this);
  }
  componentDidMount() {
    const { navigation } = this.props;
    const query = navigation.getParam("query", "NO-ID");
  }

  fetchBooks(x) {
    this.props.actions.fetchBooks("lord");
  }

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <View
      id={item.id}
      onPressItem={this.onPressItem}
      // selected={!!this.state.selected.get(item.id)}
      // title={item.title}
    >
      item
    </View>
  );

  render() {
    console.log(this.props, "render");

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Search Results Screen</Text>
        <Button
          title="Go to details"
          onPress={() => this.props.navigation.push("BookDetails")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button title="set test" onPress={() => this.test("sasax")} />
        {/* <FlatList
                  data={this.props.results.items}
                  extraData={this.state}
                  keyExtractor={this.keyExtractor}
                  renderItem={this .renderItem}
         /> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { books: state.books };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBooks }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsScreen);

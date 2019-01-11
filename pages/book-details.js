import React from "react";
import { Button, View, Text, FlatList } from "react-native";

import { connect } from "react-redux";
import { fetchBookDetails } from "../app/actions/bookActions";
import { bindActionCreators } from "redux";
export class BookDetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.keyExtractor = this.keyExtractor.bind(this);
    this.fetchBookDetails = this.fetchBookDetails.bind(this);
  }
  fetchBookDetails(id) {
    this.props.actions.fetchBookDetails(id);
  }
  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", "NO-ID");
    this.fetchBookDetails(id);
  }
  keyExtractor(item, index) {
    return index;
  }

  
  render() {
    const { current, isFetching } = this.props.books;

    return !isFetching && current ? (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Book Details </Text>
        <Text> {current.volumeInfo.title} </Text>
        <Text> {current.volumeInfo.subtitle} </Text>
        <Button
          title="Go to Results"
          onPress={() => this.props.navigation.push("SearchResults")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    ) : (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text> Loading </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { books: state.books };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBookDetails }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetailsScreen);

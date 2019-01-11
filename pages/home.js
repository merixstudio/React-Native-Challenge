import React from "react";
import { Button, View, Text } from "react-native";
import { connect } from "react-redux";
import SearchForm from "../app/components/search-form/search-form";


export class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit = query => {
    this.props.navigation.navigate('SearchResults', {query});
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Search for book</Text>
        <SearchForm onSubmit={values => this.handleSearchSubmit(values.search)} />
      </View>
    );
  }
}


const mapStateToProps = state => {
  const { book } = state;
  return { book };
};

export default connect(mapStateToProps)(HomeScreen);

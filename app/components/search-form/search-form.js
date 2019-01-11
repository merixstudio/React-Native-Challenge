import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

import { Field, reduxForm } from "redux-form";

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return (
    <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
  ); 
};

const SearchForm = ({ onSubmit, handleSubmit, value }) => {
  return (
    <View style={styles.container}>
      <Field name="search" 
             component={renderInput} 
             value={value}

        />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "white",
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: "center",
    minWidth: 250
  },
  container: {},
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 37,
    minWidth: 250,
  }
});

export default reduxForm({
  form: "searchForm"
})(SearchForm);

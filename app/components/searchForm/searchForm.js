import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { Field, reduxForm } from 'redux-form';
import styles from './searchForm.styles';

const renderInput = ({ input: { onChange, ...restInput } }) => {
  return <TextInput style={ styles.input } onChangeText={ onChange } { ...restInput } />;
};

const SearchForm = ({ onSubmit, handleSubmit, value }) => (
  <View style={ styles.container }>
    <Field name="search" component={ renderInput } value={ value } />
    <TouchableOpacity onPress={ handleSubmit(onSubmit) }>
      <Text style={ styles.button }>Submit</Text>
    </TouchableOpacity>
  </View>
);

export default reduxForm({
  form: 'searchForm',
})(SearchForm);

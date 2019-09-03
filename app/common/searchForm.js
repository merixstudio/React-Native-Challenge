import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {
  Header, Item, Icon, Button, Text,
} from 'native-base';
import { Platform } from 'react-native';
import CustomInput from './input';

const SearchForm = ({ onSubmit, handleSubmit, placeholder }) => (
  <View>
    <Header style={ { marginTop: Platform.OS === 'ios' ? 5 : 25 } } searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Field
          name="search"
          onSubmitEditing={ handleSubmit(onSubmit) }
          placeholder={ placeholder }
          component={ CustomInput }
        />
      </Item>
      <Button onPress={ handleSubmit(onSubmit) } transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  </View>
);

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'searchForm',
})(SearchForm);

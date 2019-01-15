import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import {
  Header,
  Item,
  Icon,
  Button,
  Text,
} from 'native-base';
import CustomInput from '../input/input';

const SearchForm = ({ onSubmit, handleSubmit, value }) => (
  <View>
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Field name="search" placeholder="Search for books..." component={ CustomInput } value={ value } />
      </Item>
      <Button onPress={ handleSubmit(onSubmit) } transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  </View>
);

export default reduxForm({
  form: 'searchForm',
})(SearchForm);


import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import {
  Header,
  Item,
  Icon,
  Button,
  Text,
} from 'native-base';

import CustomInput from '../input/input';

const SearchForm = ({ onSubmit, handleSubmit }) => (
  <View>
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Field
          name="search"
          placeholder="Search for books..."
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
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'searchForm',
})(SearchForm);

import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, Item, Icon, Button, Text, Input, Form,
} from 'native-base';

const SearchForm = ({
  onSubmit, onChange, value, placeholder,
}) => (
  <Form>
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input
          onSubmitEditing={ () => onSubmit(value) }
          onChangeText={ val => onChange(val) }
          value={ value }
          placeholder={ placeholder }
        />
      </Item>
      <Button onPress={ onSubmit }>
        <Text>Search</Text>
      </Button>
    </Header>
  </Form>
);

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchForm;

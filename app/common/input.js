import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
} from 'native-base';

function CustomInput({ placeholder, onSubmitEditing, input: { onChange, ...restInput } }) {
  return (
    <Input
      onSubmitEditing={ onSubmitEditing }
      onChangeText={ onChange }
      { ...restInput }
      placeholder={ placeholder }
    />
  );
}

CustomInput.propTypes = {
  onSubmitEditing: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default CustomInput;

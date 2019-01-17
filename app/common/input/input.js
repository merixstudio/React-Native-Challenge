import React from 'react';
import {
  Input,
} from 'native-base';
import PropTypes from 'prop-types';

function CustomInput({ placeholder, input: { onChange, ...restInput } }) {
  return (
    <Input
      onChangeText={ onChange }
      { ...restInput }
      placeholder={ placeholder }
    />
  );
}

CustomInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default CustomInput;

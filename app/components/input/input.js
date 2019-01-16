import React from 'react';
import {
  Input,
} from 'native-base';

export default function CustomInput({ placeholder, input: { onChange, ...restInput } }) {
  return (
    <Input
      onChangeText={ onChange }
      { ...restInput }
      placeholder={ placeholder } />
  );
}

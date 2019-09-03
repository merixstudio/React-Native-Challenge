import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

function RenderError({ error }) {
  const message = `Something went wrong... 
    Error ${error.status} : ${error.data}!`;

  return (
    <View style={ {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    } }
    >
      <Text>
        {' '}
        { message }
        {' '}
      </Text>
    </View>
  );
}

RenderError.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number,
    data: PropTypes.string,
  }).isRequired,
};

export default RenderError;

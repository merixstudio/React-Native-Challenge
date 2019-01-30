import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';

function RenderMessage({ message }) {
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
      </Text>
    </View>
  );
}

RenderMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default RenderMessage;

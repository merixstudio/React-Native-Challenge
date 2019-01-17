

import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

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

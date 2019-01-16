

import React from 'react';
import { View, Text } from 'react-native';

export default function RenderMessage({ message }) {
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

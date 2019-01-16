import React from 'react';
import { View, Text } from 'react-native';

export default function RenderError({ error }) {
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

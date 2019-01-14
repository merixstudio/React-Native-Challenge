import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './listItem.styles';

export default function ListItem(props) {
  const { title } = props;

  function onPress() {
    props.onPressItem(props.id);
  }

  return (
    <TouchableOpacity onPress={ onPress }>
      <View>
        <Text style={ styles.listItem }>{ title }</Text>
      </View>
    </TouchableOpacity>
  );
}

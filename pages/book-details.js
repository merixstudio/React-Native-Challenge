
import React from 'react';
import { Button, View, Text } from 'react-native';

export class BookDetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Book Details </Text>
          <Button
            title="Go to Results"
            onPress={() => this.props.navigation.push('SearchResults')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
}

import React from 'react';
import { Button, View, Text } from 'react-native';

export class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.push('BookDetails')}
          />
           <Button
            title="Go to results"
            onPress={() => this.props.navigation.push('SearchResults')}
          />
        </View>
      );
    }
  }
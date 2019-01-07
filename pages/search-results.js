
import React from 'react';
import { Button, View, Text } from 'react-native';

export class SearchResultsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Search Results Screen</Text>
          <Button
            title="Go to details"
            onPress={() => this.props.navigation.push('BookDetails')}
          />
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      );
    }
}
import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Image,
} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';

export class BookSearchItemDetailsCard extends React.Component {
  render() {
    const { current } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              square
              source={ {
                uri: current.volumeInfo.imageLinks
                  ? current.volumeInfo.imageLinks.smallThumbnail
                  : '/assets/icon.png',
              } }
            />
            <Body>
              <Text>
                { current.volumeInfo.title }
              </Text>
              <Text note>
                { current.volumeInfo.publishedDate }
              </Text>
            </Body>
          </Left>
        </CardItem>
        {current.volumeInfo.authors && (
          <CardItem>
            <View style={ { flexDirection: 'row' } }>
              <Text>
                { current.volumeInfo.authors.length > 1 ? 'Authors:' : 'Author:'}
                {' '}
              </Text>
              <FlatList
                data={ current.volumeInfo.authors }
                keyExtractor={ (item, index) => item[index] }
                renderItem={ ({ item }) => <Text>{item}</Text> }
              />
            </View>
          </CardItem>
        )}
        { current.volumeInfo.publisher && (
          <CardItem>
            <Text>
                        Publisher:
              {' '}
              { current.volumeInfo.publisher }
            </Text>
          </CardItem>
        )}
        <CardItem>
          <Body>
            <Image
              style={ {
                height: 200, width: 200, flex: 1, marginBottom: 20,
              } }
              source={ {
                uri: current.volumeInfo.imageLinks
                  ? current.volumeInfo.imageLinks.thumbnail
                  : '/assets/icon.png',
              } }
            />
            <Text>
              { current.volumeInfo.description ? current.volumeInfo.description.replace(/<\/?[^>]+(>|$)/g, '') : '' }
            </Text>
          </Body>
        </CardItem>
        { current.volumeInfo.averageRating && (
          <CardItem>
            <Left>
              <Button transparent textStyle={ { color: '#87838B' } }>
                <Icon name="logo-google" />
                <Text>
                      Average Rating
                  {' '}
                  { current.volumeInfo.averageRating }
                </Text>
              </Button>
            </Left>
          </CardItem>
        )}
      </Card>
    );
  }
}


BookSearchItemDetailsCard.propTypes = {
  current: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
      }),
      authors: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      publishedDate: PropTypes.string,
      publisher: PropTypes.string,
      description: PropTypes.string,
      averageRating: PropTypes.number,
    }),
  }),
};

BookSearchItemDetailsCard.defaultProps = {
  current: null,
};

export default BookSearchItemDetailsCard;



import React from 'react';
import PropTypes from 'prop-types';
import {
  Thumbnail,
  Right,
  Text,
  Button,
  Body,
  ListItem,
} from 'native-base';

export class BookSearchResultsItem extends React.Component {
  render() {
    const { item, onPressItem } = this.props;
    return (
      <ListItem
        thumbnail
        onPress={ () => onPressItem(item.id) }
      >
        <Thumbnail
          square
          source={ {
            uri: item.volumeInfo.imageLinks
              ? item.volumeInfo.imageLinks.smallThumbnail
              : '/assets/icon.png',
          } }
        />
        <Body>
          <Text>
            { item.volumeInfo.title }
          </Text>
          <Text note numberOfLines={ 1 }>{item.volumeInfo.description}</Text>
        </Body>
        <Right>
          <Button transparent onPress={ () => this.onPressItem(item.id) }>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}


BookSearchResultsItem.propTypes = {
  onPressItem: PropTypes.func.isRequired,
  item: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      imageLinks: PropTypes.shape({
        smallThumbnail: PropTypes.string,
      }),
      title: PropTypes.string,

      description: PropTypes.string,
    }),
  }),
};

BookSearchResultsItem.defaultProps = {
  item: null,
};

export default BookSearchResultsItem;

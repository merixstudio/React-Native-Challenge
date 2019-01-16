import React from 'react';
import { bindActionCreators } from 'redux';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import { Image, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchBookDetails } from '../app/actions/bookActions';
import RenderError from '../app/components/error/error';
import RenderMessage from '../app/components/message/message';

export class BookDetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.fetchBookDetails = this.fetchBookDetails.bind(this);
  }

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    this.fetchBookDetails(id);
  }

  fetchBookDetails(id) {
    const { actions } = this.props;
    actions.fetchBookDetails(id);
  }

  render() {
    const { books } = this.props;
    const { current, isFetching, error } = books;

    if (!isFetching && current) {
      return (
        <Container>
          <Content>
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
                    { current.volumeInfo.description }
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
          </Content>
        </Container>
      );
    }
    if (!isFetching && error) { return (<RenderError error={ error } />); }
    if (!isFetching && !error && !current) { return (<RenderMessage message="No data..." />); }
    return (<RenderMessage message="Loading..." />);
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ fetchBookDetails }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookDetailsScreen);

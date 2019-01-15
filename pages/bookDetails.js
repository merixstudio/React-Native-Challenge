import React from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchBookDetails } from '../app/actions/bookActions';

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
    const { current, isFetching } = books;

    return !isFetching && current ? (
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
            <CardItem>
              <Body style={ { alignItems: 'center' } }>
                <Image
                  style={ { height: 200, width: 200, flex: 1, marginBottom: 20 } }
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
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-google" />
                  <Text> Average Rating { current.volumeInfo.averageRating } </Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    ) : (
      <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
        <Text> Loading </Text>
      </View>
    );
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


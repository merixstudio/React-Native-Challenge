import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container, Content, Header, Left, Body, Title, Icon, Right, Button,
} from 'native-base';

import BookSearchItemDetailsCard from '../components/BookSearchItemDetailsCard';
import RenderError from '../../../common/error';
import RenderMessage from '../../../common/message';

import { fetchBookDetails } from '../../../store/actions/bookActions';

function BookSearchItemDetails({
  current, isFetching, error, navigation, fetchBookDetailsAction,
}) {
  useEffect(() => {
    const id = navigation.getParam('id', 'NO-ID');
    fetchBookDetailsAction(id);
  }, []);

  if (isFetching) {
    return <RenderMessage message="Loading..." />;
  }
  if (error) {
    return <RenderError error={ error } />;
  }
  if (current) {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={ () => navigation.goBack() }>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Item details</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <BookSearchItemDetailsCard current={ current } />
        </Content>
      </Container>
    );
  }
  return <RenderMessage message="No data..." />;
}

BookSearchItemDetails.navigationOptions = {
  header: null,
};

BookSearchItemDetails.propTypes = {
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
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    status: PropTypes.number,
    data: PropTypes.string,
  }),
  fetchBookDetailsAction: PropTypes.func.isRequired,
};

BookSearchItemDetails.defaultProps = {
  current: null,
  error: null,
};

const mapStateToProps = state => ({
  current: state.books.current,
  isFetching: state.books.isFetching,
  error: state.books.error,
});

const mapDispatchToProps = dispatch => ({
  fetchBookDetailsAction: id => dispatch(fetchBookDetails(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookSearchItemDetails);

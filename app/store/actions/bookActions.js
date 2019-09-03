import axios from 'axios';

const prefix = '[books]';
const googleApiUrl = 'https://www.googleapis.com/books/v1';

export const booksActionsTypes = {
  SEARCH_REQUEST: `${prefix} Search Request`,
  SEARCH_SUCCESS: `${prefix} Search Success`,
  SEARCH_ERROR: `${prefix} Search Error`,

  BOOK_DETAILS_REQUEST: `${prefix} Book Details Request`,
  BOOK_DETAILS_SUCCESS: `${prefix} Book Details Success`,
  BOOK_DETAILS_ERROR: `${prefix} Book Details Error`,
};

export const searchRequest = payload => ({
  type: booksActionsTypes.SEARCH_REQUEST,
  payload,
});
export const searchSuccess = payload => ({
  type: booksActionsTypes.SEARCH_SUCCESS,
  payload,
});
export const searchError = payload => ({
  type: booksActionsTypes.SEARCH_ERROR,
  payload,
});

export const bookDetailsRequest = () => ({
  type: booksActionsTypes.BOOK_DETAILS_REQUEST,
});
export const bookDetailsSuccess = payload => ({
  type: booksActionsTypes.BOOK_DETAILS_SUCCESS,
  payload,
});
export const bookDetailsError = payload => ({
  type: booksActionsTypes.BOOK_DETAILS_ERROR,
  payload,
});

export const fetchBookDetails = bookId => (dispatch) => {
  dispatch(bookDetailsRequest());

  return axios
    .get(`${googleApiUrl}/volumes/${bookId}`)
    .then(
      response => dispatch(bookDetailsSuccess(response.data)),
      error => dispatch(bookDetailsError(error.response)),
    );
};

export const fetchBooks = searchPhrase => (dispatch) => {
  dispatch(searchRequest(searchPhrase));

  return axios
    .get(`${googleApiUrl}/volumes?q=${searchPhrase}`)
    .then(
      response => dispatch(searchSuccess(response.data)),
      error => dispatch(searchError(error.response)),
    );
};

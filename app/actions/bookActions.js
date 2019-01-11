import axios from 'axios';

const prefix = '[books]';

export const booksActionsTypes = {
  SEARCH_REQUEST: `${prefix} Search Request`,
  SEARCH_SUCCESS: `${prefix} Search Success`,
  SEARCH_ERROR: `${prefix} Search Error`,

  BOOK_DETAILS_REQUEST: `${prefix} BOOK Details Request`,
  BOOK_DETAILS_SUCCESS: `${prefix} BOOK Details Success`,
  BOOK_DETAILS_ERROR: `${prefix} BOOK Details Error`,
};

export const searchRequest = () => ({ type: booksActionsTypes.SEARCH_REQUEST });
export const searchSuccess = results => ({ type: booksActionsTypes.SEARCH_SUCCESS, results });
export const searchError = errors => ({ type: booksActionsTypes.SEARCH_ERROR, errors });

export const bookDetailsRequest = () => ({ type: booksActionsTypes.BOOK_DETAILS_REQUEST });
export const bookDetailsSuccess = details => ({ type: booksActionsTypes.BOOK_DETAILS_SUCCESS, details });
export const bookDetailsError = errors => ({ type: booksActionsTypes.BOOK_DETAILS_ERROR, errors });




export const fetchBooks = (searchPhrase) => {
  console.log(searchPhrase, 'searchPhrase')
    return async (dispatch) => {
      dispatch(searchRequest());
      
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchPhrase}`)
      } catch (e) {

      }
     
    
      const json = await response.json();
      if (response.status === 200) {
        return dispatch(searchSuccess(json.data));
      } else {
        return dispatch(searchError([json.details]));
      }
    };
  };
  

  export const fetchBookDetails = (bookId) => {
    return async (dispatch) => {
      dispatch(bookDetailsRequest());
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
      const json = await response.json();
      if (response.status === 200) {
        return dispatch(bookDetailsSuccess(json));
      } else {
        return dispatch(bookDetailsError(['Book Not Found']));
      }
    }
  }
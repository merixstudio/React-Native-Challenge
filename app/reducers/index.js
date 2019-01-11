import { combineReducers } from 'redux';
import { bookReducer } from './book';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  books: bookReducer,
  form: formReducer
});

export default rootReducer;
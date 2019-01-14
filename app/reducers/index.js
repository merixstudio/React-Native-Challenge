import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import bookReducer from './book';

const rootReducer = combineReducers({
  books: bookReducer,
  form: formReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  form: formReducer,
});

export default rootReducer;

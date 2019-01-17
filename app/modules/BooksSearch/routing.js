

import { createStackNavigator } from 'react-navigation';
import BookSearchResults from './screens/BookSearchResults/BookSearchResults';
import BookSearchItemDetails from './screens/BookSearchItemDetails/BookSearchItemDetails';
import BookSearch from './screens/BookSearch/BookSearch';

const BookSearchNavigator = createStackNavigator({
  BookSearch: {
    screen: BookSearch,
  },
  BookSearchItemDetails: {
    screen: BookSearchItemDetails,
  },
  BookSearchResults: {
    screen: BookSearchResults,
  },
});

export default BookSearchNavigator;

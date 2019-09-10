import { createStackNavigator } from 'react-navigation-stack';

import BookSearchResults from './screens/BookSearchResults';
import BookSearchItemDetails from './screens/BookSearchItemDetails';
import BookSearch from './screens/BookSearch';

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

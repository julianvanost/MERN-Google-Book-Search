  
import { createContext } from 'react'

const BookContext = createContext({
  bookSearchInput: '',
  query: '',
  searchedBooks: [],
  books: [],
  handleInputChange: () => { },
  handleInputSearch: () => { },
  handleSaveBook: (i) => { },
  handleDeleteBook: (id) => { }
})

export default BookContext
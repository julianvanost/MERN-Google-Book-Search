import React, { useState } from 'react';
import Saved from './pages/Saved'
import Search from './pages/Search'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import BookContext from './utils/BookContext'
import Book from './utils/Books'
import axios from 'axios';

function App() {

  const [bookState, setBookState] = useState({
    books: [],
    query: '',
    bookSearchInput: '',
    searchedBooks: []
  })

  bookState.handleInputChange = ({ target }) => {
    setBookState({ ...bookState, [target.name]: target.value })
  }

  bookState.handleInputSearch = event => {
    event.preventDefault()

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.bookSearchInput}&key=AIzaSyCE0ZsJWit1sRHec64nP7PNBEMp1_vtU9Y`)
      .then(({ data: { items } }) => {
        let booksObj = items.map(obj => obj.volumeInfo)
        setBookState({
          ...bookState,
          bookSearchInput: '',
          searchedBooks: booksObj
        })
      })
      .catch(e => console.error(e))
  }

  bookState.handleSaveBook = i => {
    let savedBook = JSON.parse(JSON.stringify(bookState.searchedBooks[i]))
    let books = JSON.parse(JSON.stringify(bookState.books))

    Book.create(savedBook)

    books.push(savedBook)
    setBookState({ ...bookState, books })
  }

  bookState.handleDeleteBook = (id) => {
    Book.delete(id)
      .then(() => {
        let books = JSON.parse(JSON.stringify(bookState.books))
        setBookState({ ...bookState, books })
      })
      .catch(e => console.error(e))
  }

  return (
    <BookContext.Provider value={bookState}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
    </BookContext.Provider>
  );
}

export default App;

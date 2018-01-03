import React from 'react'
import ListBooks from './ListBooks.js'
import SearchBook from './SearchBook.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     currentlyReadingBooks: [],
     wantToReadBooks: [],
     readBooks: [],

    showSearchPage: false
  }

  pageToSearch = () => {
    console.log('pageToSearch');
    this.setState({showSearchPage: true})
  }

  closeSearch = () => {
    console.log('closeSearch');
    this.setState({showSearchPage: false})

    this.getBook('sJf1vQAACAAJ')
  }

  // network
  updateBook = (book, shelf) => {
    console.log('updateBook req');
    BooksAPI.update(book, shelf).then(
      (data) => {
        console.log('updateBook res:', data);
          this.getAll()
      }
    )
  }

  getBook = (bookId) => {
    console.log('getBook req');
    BooksAPI.get(bookId).then(
      (book) => {
        console.log('getBook res:', book);
      }
    )
  }

  getAll = () => {
    console.log('getAll req');
    BooksAPI.getAll().then(
      (books) => {
        console.log('getAll res:', books);
        const currently = books.filter((book) => {return (book.shelf === 'currentlyReading')})
        const wantTo = books.filter((book) => {return (book.shelf === 'wantToRead')})
        const read = books.filter((book) => {return (book.shelf === 'read')})
        this.setState({
          currentlyReadingBooks: currently,
          wantToReadBooks: wantTo,
          readBooks: read
        })
      }
    )
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    return (this.state.showSearchPage ?
      <SearchBook
        onBackAction={this.closeSearch}
      />
      :
      <ListBooks
        currentlyReadingBooks={this.state.currentlyReadingBooks}
        wantToReadBooks={this.state.wantToReadBooks}
        readBooks={this.state.readBooks}
        onAddAction={this.pageToSearch}
        onChangeBookState={this.updateBook}
      />
    )
  }
}

export default BooksApp

import React from 'react'
// import BookSelect from './BookSelect.js'
import ListSearchResult from './ListSearchResult.js'
import {Link} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import './App.css'

class SearchBook extends React.Component {
  state = {
    keyword : "",
    books : []
  }

  inputChanged = (text) => {
    this.setState(
      {keyword : text}
    )
    this.searchBook(text)
  }

  updateBook = (book, shelf) => {
    console.log('search updateBook req shelf', shelf);
    // BooksAPI.update(book, shelf).then(
    //   (data) => {
    //     console.log('updateBook res:', data);
    //   }
    // )

    if (this.props.onChangeBookState)
      this.props.onChangeBookState(book, shelf)
  }

  searchBook = (query) => {
    console.log('searchBook req query=', query);
    BooksAPI.search(query).then(
      (books) => {
        console.log('searchBook res books=', books);
        if (books.error) {
          this.setState(
            {books : []}
          )
        } else {
          this.setState(
            {books : books}
          )
        }
      }
    )
  }

  render () {
    const {myReads, onBackAction} = this.props
    const {keyword, books} = this.state

    console.log('searchBook render myReads=', myReads);
    const matchBooks = books.map((book) => {
      book.shelf = 'none'
      myReads.forEach((eachBook) => {
        if (eachBook.id == book.id)
          book.shelf = eachBook.shelf
      })
      return book
    })
    console.log('searchBook render matchBooks=', matchBooks);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" onClick={() => {onBackAction()}} to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={keyword}
              onChange={(event) => {this.inputChanged(event.target.value)}}
            />
          </div>
        </div>

        <ListSearchResult
          books={matchBooks}
          onChangeBookState={this.updateBook}
        />
      </div>
    )
  }
}

export default SearchBook

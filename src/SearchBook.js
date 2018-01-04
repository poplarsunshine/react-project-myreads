import React from 'react'
import BookSelect from './BookSelect.js'
import ListSearchResult from './ListSearchResult.js'

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
    this.serrchBook(text)
  }

  updateBook = () => {

  }

  serrchBook = (query) => {
    console.log('serrchBook req query=', query);
    BooksAPI.search(query).then(
      (books) => {
        console.log('serrchBook res books=', books);
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
    const {onBackAction} = this.props
    const {keyword, books} = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => {onBackAction()}}>Close</a>
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
          books={books}
          onChangeBookState={this.updateBook}
        />
      </div>
    )
  }
}

export default SearchBook

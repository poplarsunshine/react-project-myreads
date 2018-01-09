import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'

import './App.css'

class ListSearchResult extends React.Component {
  state = {

  }

  static propTypes = {
    books : PropTypes.array.isRequired,
  }

  render () {
    const {books, onChangeBookState} = this.props

    return (
      <div className="search-books-results">
        <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} onSelectBookShelf={(book, shelf) => {onChangeBookState(book, shelf)}}/>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}

export default ListSearchResult

import React from 'react'
import PropTypes from 'prop-types'
import BookSelect from './BookSelect.js'

import './App.css'

class ListSearchResult extends React.Component {
  state = {

  }

  static propTypes = {
    // books : PropTypes.object.isRequired,
  }

  render () {
    const {books, onChangeBookState} = this.props

    return (
      <div className="search-books-results">
        <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                  <BookSelect theBook={book} onSelectBookShelf={(book, shelf) => {onChangeBookState(book, shelf)}}/>
                </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
        </ol>
      </div>
    )
  }
}

export default ListSearchResult

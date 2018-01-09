import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book.js'
import {Link} from 'react-router-dom'

import './App.css'

class ListBooks extends React.Component {
  state = {

  }

  static propTypes = {
    // books : PropTypes.object.isRequired,
    onAddAction : PropTypes.func.isRequired
  }

  render () {
    const {currentlyReadingBooks, wantToReadBooks, readBooks, onAddAction, onChangeBookState} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyRead</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {currentlyReadingBooks.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onSelectBookShelf={(book, shelf) => {onChangeBookState(book, shelf)}}/>
                  </li>
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToReadBooks.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onSelectBookShelf={(book, shelf) => {onChangeBookState(book, shelf)}}/>
                  </li>
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {readBooks.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onSelectBookShelf={(book, shelf) => {onChangeBookState(book, shelf)}}/>
                  </li>
                ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
            onClick={() => {onAddAction()}}
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks

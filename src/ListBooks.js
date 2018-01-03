import React from 'react'
import PropTypes from 'prop-types'

import './App.css'

// <select onChange={(event) => {onChangeReadState(event.target.value)}}>

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
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                          <select onChange={(event) => {onChangeBookState(book, event.target.value)}}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading" selected>Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">authors</div>
                    </div>
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
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={(event) => {onChangeBookState(book, event.target.value)}}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead" selected>Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">authors</div>
                    </div>
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
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={(event) => {onChangeBookState(book, event.target.value)}}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read" selected>Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">authors</div>
                    </div>
                  </li>
                ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => {onAddAction()}}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks

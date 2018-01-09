import React from 'react'
import PropTypes from 'prop-types'
import BookSelect from './BookSelect.js'
import './App.css'

class Book extends React.Component {

  static propTypes = {
    book : PropTypes.object.isRequired,
    onSelectBookShelf : PropTypes.func.isRequired
  }

  handleChangeBookState = (book, shelf) => {
    console.log('book update');
    if (this.props.onSelectBookShelf) {
      this.props.onSelectBookShelf(book, shelf)
      console.log('book onChangeBookState');
    }
  }

  render () {
    const {book} = this.props
    const shelf = book && book.shelf
    console.log('book shelf', shelf);

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <BookSelect theBook={book} onSelectBookShelf={this.handleChangeBookState}/>
          </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book

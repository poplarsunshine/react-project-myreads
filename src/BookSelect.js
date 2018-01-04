import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

class BookSelect extends React.Component {

  static propTypes = {
    theBook : PropTypes.object.isRequired,
    onSelectBookShelf : PropTypes.func.isRequired
  }

  render () {
    const {theBook, onSelectBookShelf} = this.props
    const shelf = theBook && theBook.shelf

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => {onSelectBookShelf(theBook, event.target.value)}}>
          <option value="none" disabled>Move to...</option>
          {shelf === "currentlyReading" && <option value="currentlyReading" selected>Currently Reading</option>}
          {shelf !== "currentlyReading" && <option value="currentlyReading"         >Currently Reading</option>}
          {shelf === "wantToRead" && <option value="wantToRead" selected>Want to Read</option>}
          {shelf !== "wantToRead" && <option value="wantToRead"         >Want to Read</option>}
          {shelf === "read" && <option value="read" selected>Read</option>}
          {shelf !== "read" && <option value="read"         >Read</option>}
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookSelect

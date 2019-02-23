import React, { Component } from "react";
import "./BookList.css";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../queries/queries";

import BookDetails from "../BookDetails/BookDetails";

class BookList extends Component {
  state = {
    bookId: ""
  };

  displayBooks = () => {
    const data = this.props.data;
    if (!data.loading) {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={() => this.handleClick(book.id)}>
            {book.name}
          </li>
        );
      });
    } else return <li>Loading books...</li>;
  };

  handleClick = bookId => {
    this.setState({ bookId: bookId });
  };

  render() {
    return (
      <>
        <div className="book-list">
          <ul id="book-list">{this.displayBooks()}</ul>
        </div>
        <BookDetails bookId={this.state.bookId} />
      </>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

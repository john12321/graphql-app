import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../../queries/queries";

class BookDetails extends Component {
  authorBooks = () => {
    const { book } = this.props.data;
    return book.author.books.map(element => {
      return <h6 key={element.id}>{element.name}</h6>;
    });
  };

  renderBook = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <>
          <h3>name: {book.name}</h3>
          <h4>book id: {book.id}</h4>
          <h4>Author: {book.author.name}</h4>
          <h5>Other books by {book.author.name}</h5>
          {this.authorBooks()}
        </>
      );
    } else {
      return <h4>Click a book above for details...</h4>;
    }
  };

  render() {
    return (
      <div id="book-details">
        <h2>Book details</h2>
        {this.renderBook()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);

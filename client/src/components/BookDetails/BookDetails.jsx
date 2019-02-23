import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../../queries/queries";
import "./BookDetails.css";

class BookDetails extends Component {
  authorBooks = () => {
    const { book } = this.props.data;
    return book.author.books.map(element => {
      return <li key={element.id}>{element.name}</li>;
    });
  };

  renderBook = () => {
    const { book } = this.props.data;
    if (book) {
      return (
        <div id="book-details">
          <section>
            <h3>Name:</h3>
            <p>{book.name}</p>
          </section>
          <section>
            <h3>Author:</h3>
            <p>{book.author.name}</p>
          </section>
          <section>
            <h3>Book id:</h3>
            <p>{book.id}</p>
          </section>
          <hr />
          <section>
            <h3 id="all-books-header">All books by {book.author.name}</h3>
            {this.authorBooks()}
          </section>
        </div>
      );
    } else {
      return (
        <>
          <section id="book-details-none">
            <h3>Click a book from the list</h3>
          </section>
        </>
      );
    }
  };

  render() {
    return <div className="book-details">{this.renderBook()}</div>;
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

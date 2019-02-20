import React, { Component } from "react";
import "./BookList.css";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class BookList extends Component {
  displayBooks = () => {
    const data = this.props.data;
    if (!data.loading) {
      return data.books.map(book => {
        return (
          <li id="book-li" key={book.id}>
            {book.name}
          </li>
        );
      });
    } else return <li>Loading books...</li>;
  };

  render() {
    return (
      <div>
        <h2>Book list</h2>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

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
      return data.books.map(element => {
        return <li key={element.id}>{element.name}</li>;
      });
    } else return <li>Loading...</li>;
  };

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);

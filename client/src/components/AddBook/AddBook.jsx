import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../../../src/queries/queries";
class Addname extends Component {
  state = {
    name: "",
    genre: "",
    authorId: ""
  };

  displayAuthors = () => {
    const data = this.props.getAuthorsQuery;
    if (!data.loading) {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    } else return <option>Loading...</option>;
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    const { name, genre, authorId } = this.state;
    event.preventDefault();
    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  render() {
    return (
      <>
        <h2>Add a book to the list</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name name</label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="genre">Genre</label>
          <input
            name="genre"
            id="genre"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="author">Author</label>
          <select
            name="author"
            id="authorId"
            type="text"
            onChange={this.handleChange}
          >
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
          <button>add </button>
        </form>
      </>
    );
  }
}

// binding one query to the component
// export default graphql(getAuthorsQuery)(Addname);

// binding queries to the component
export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(Addname);

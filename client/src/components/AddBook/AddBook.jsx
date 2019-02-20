import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../../../src/queries/queries";
class AddBook extends Component {
  state = {
    book: "",
    genre: "",
    author: ""
  };

  displayAuthors = () => {
    const data = this.props.data;
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

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="book">Book name</label>
          <input
            name="book"
            id="book"
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
            id="author"
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

export default graphql(getAuthorsQuery)(AddBook);

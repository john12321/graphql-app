import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../../../src/queries/queries";
import "./AddBook.css";
class Addname extends Component {
  state = {
    name: null,
    genre: null,
    authorId: null
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
    if (name && genre) {
      this.props.addBookMutation({
        variables: {
          name,
          genre,
          authorId
        },
        refetchQueries: [{ query: getBooksQuery }]
      });
    } else {
      alert("You need to at least add a book name and genre!");
    }
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">name</label>
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
          <label />
          <button className="form-btn">add a book </button>
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

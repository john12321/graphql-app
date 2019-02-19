import React, { Component } from "react";
import "./App.css";
import BookList from "./components/BookList/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Johnny's reading list</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

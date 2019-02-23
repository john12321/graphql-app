import React, { Component } from "react";
import "./App.css";
import BookList from "./components/BookList/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddBook from "./components/AddBook/AddBook";
import Header from "./components/Header/Header";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <BookList />
          <AddBook className="add-book" />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

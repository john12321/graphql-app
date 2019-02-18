const graphql = require("graphql");
const Book = require("../models/book");
const Author = require("../models/author");

//define objectypes book author

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

//dummy data
// const books = [
//   { name: "name the wind", genre: "fantasy", id: 1, authorId: 3 },
//   { name: "same as the wind", genre: "boring", id: 2, authorId: 1 },
//   { name: "not likely to be the wind", genre: "horror", id: 3, authorId: 2 },
//   { name: "rock of ages", genre: "duller", id: 4, authorId: 1 },
//   { name: "lack of plot", genre: "horror", id: 5, authorId: 3 },
//   { name: "breaking wind", genre: "fantasy", id: 6, authorId: 1 }
// ];

// const authors = [
//   { name: "Billy bob", age: 400, id: 1 },
//   { name: "Nobbo stilo", age: 4, id: 2 },
//   { name: "Karen Hardbod", age: 26, id: 3 }
// ];

//defined first object type - the book type
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // for (let i = 0; i < authors.length; i++) {
        //   if (authors[i].id === parent.authorId) {
        //     return authors[i];
        //   }
        // }
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // let arr = [];
        // for (let i = 0; i < books.length; i++) {
        //   if (books[i].authorId === parent.id) {
        //     arr.push(books[i]);
        //   }
        // }
        // return arr;
      }
    }
  })
});

//define intial entry point into graph - e.g. how we can reach a book
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //resolve func has code to get data from db other source
        // for (let i = 0; i < books.length; i++) {
        //   if (books[i].id === +args.id) {
        //     return books[i];
        //   }
        // }
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // for (let i = 0; i < authors.length; i++) {
        //   if (authors[i].id === +args.id) {
        //     return authors[i];
        //   }
        // }
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        // return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors;
      }
    }
  }
});

//we define which query a user can use from front end
module.exports = new GraphQLSchema({
  query: RootQuery
});

const app = require("express")();
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
const connectionString = require("./utils");

mongoose.connect(connectionString.connectionString, { useNewUrlParser: true });
mongoose.connection.once("open", () => console.log("connected to mongo db"));

//express middleware for single graphql endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

module.exports = app;

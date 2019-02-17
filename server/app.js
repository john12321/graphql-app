const app = require("express")();
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

//express middleware for single graphql endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

module.exports = app;

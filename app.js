const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import');

const resolvers = require('./graphql/resolvers/index');

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/types/schema.graphql'),
    resolvers
});

const app = express();
server.applyMiddleware({app});

app.listen({ port: 4001 }, () => {
    console.log("4001 de başladı")
})

const express = require('express');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import');

const resolvers = require('./graphql/resolvers/index');

//models
const User = require('./models/User');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Buying = require('./models/Buying');

const server = new ApolloServer({
    typeDefs: importSchema('./graphql/schema.graphql'),
    resolvers,
    context: ({ req }) => ({
        User,
        Product,
        Cart,
        Buying,
        activeUser: req.activeUser
    })
});

mongoose.connect(process.env.DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(e => console.log(e))

const app = express();

app.use(async (req, res, next) => {
    const token = req.headers['authorization'];

    if(token && token !== 'null') {
        try {
            const activeUser = await jwt.verify(token, process.env.SECRET_KEY)
            req.activeUser = activeUser;

        } catch (e) {
            
        }
    }

    next()
});

server.applyMiddleware({app});

app.listen({ port: 4001 }, () => {
    console.log("http://localhost:4001/graphql de başladı!")
})

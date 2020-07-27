const Query = require('./queries/Query');

const Cart = require('./queries/Cart')
const Buying = require('./queries/Buying')

const Mutation = require('./mutations/index');

module.exports = {
    Query,
    Mutation,
    Cart,
    Buying
};

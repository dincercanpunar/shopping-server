const user = require('./user.mutation');
const product = require('./product.mutation');
const cart = require('./cart.mutation');
//const buying = require('./buying.mutation');

const Mutation = {
    ...user,
    ...product,
    ...cart,
    //...buying
};

module.exports = Mutation;
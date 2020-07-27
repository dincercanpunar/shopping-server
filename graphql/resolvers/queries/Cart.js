const Cart = {
    buyings: async (parent, args, { Buying }) => {
        return await Buying.find({ cart_id: parent._id })
    }
};

module.exports = Cart;
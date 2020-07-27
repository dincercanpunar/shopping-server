module.exports = {
    createCart: async (parent, { data: { buyings }}, { activeUser, User, Cart, Product, Buying }) => {
        
        var user = await User.findOne({ username: activeUser.username })

        var price = 0;

        for await (buying of buyings) {
            const { product_id, quantity } = buying;

            var product = await Product.findById(product_id)
            price += product.price * quantity
        }

        var cart = await new Cart({
            user_id: user._id,
            price
        }).save();

        for await (buying of buyings) {
            const { product_id, quantity } = buying;

            var buying = await new Buying({
                product_id,
                cart_id: cart._id,
                quantity
            }).save();
        }
        
        return cart
    }
};

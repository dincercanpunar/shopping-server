const Buying = {
    product: async (parent, args, { Product }) => {
        return await Product.findById(parent.product_id)
    }
};

module.exports = Buying;
module.exports = {
    createProduct: async (parent, { data: { title, price, isActive }}, { Product }) => {
        return await new Product({
            title,
            price,
            isActive
        }).save();
    }
};

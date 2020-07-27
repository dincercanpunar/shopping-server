module.exports = {
    activeUser: async (parent, args, { activeUser, User}) => {
        return await User.findOne({ username: activeUser.username })
    },
    products: async (parent, args, { Product }) => {
        return await Product.find({});
    }
};

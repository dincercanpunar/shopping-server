const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user_id: {
        type: Schema.ObjectId
    },
    price: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('cart', cartSchema);

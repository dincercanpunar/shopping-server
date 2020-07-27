const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const buyingSchema = new Schema({
    product_id: {
        type: Schema.ObjectId
    },
    cart_id: {
        type: Schema.ObjectId
    },
    quantity: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
        required: true
    }
});

module.exports = mongoose.model('buying', buyingSchema);

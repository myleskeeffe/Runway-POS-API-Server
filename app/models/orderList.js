var mongoose = require('mongoose');

var orderListSchema = new mongoose.Schema({

    product: {
        type: Number,
        required: true
    },
    saleDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    quantity: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('orderList', orderListSchema);
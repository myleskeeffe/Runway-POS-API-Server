var mongoose = require('mongoose');

var productListSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    business: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('productList', productListSchema);
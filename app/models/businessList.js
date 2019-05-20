var mongoose = require('mongoose');

var businessListSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    '50dollarPermission': {
        type: Boolean,
        required: true
    },
    charity: {
        type: String,
        required: false
    },
    charityPercent: {
        type: Number,
        required: false
    },
    businessOwners: {
        type: Array,
        required: true
    }

});

module.exports = mongoose.model('businessList', businessListSchema);
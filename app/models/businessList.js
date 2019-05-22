var mongoose = require('mongoose');

var businessListSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    fiftyDollarPermission: {
        type: String,
        required: true
    },
    charity: {
        type: String,
        required: false
    },
    charityPercent: {
        type: String,
        required: false
    },
    businessOwners: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('businessList', businessListSchema);
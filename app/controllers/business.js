var business = require('../models/businessList');

exports.getBusinesses = function(req, res, next){

    business.find(function(err, businesss) {

        if (err){
            res.send(err);
        }

        res.json(businesss);

    });

}

exports.createBusiness = function(req, res, next){

    business.create({
        name : req.body.name,
        business : req.body.business,
        price : req.body.price
    }, function(err, todo) {

        if (err){
            res.send(err);
        }

        business.find(function(err, businesss) {

            if (err){
                res.send(err);
            }

            res.json(businesss);

        });

    });

}

exports.deleteBusiness = function(req, res, next){

    business.remove({
        _id : req.params.business_id
    }, function(err, business) {
        res.json(business);
    });

}
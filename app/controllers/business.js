var business = require('../models/businessList');

exports.getBusinesses = function(req, res, next){

    business.find(function(err, businesses) {

        if (err){
            res.send(err);
        }

        res.json(businesses);

    });

}

exports.createBusiness = function(req, res, next){

    business.create({
        name : req.body.name,
        fiftyDollarPermission : req.body.fiftyDollarPermission,
        charity : req.body.charity,
        charityPercent : req.body.charityPercent,
        businessOwners : req.body.businessOwners
    }, function(err, todo) {

        if (err){
            res.send('err');
        }

        business.find(function(err, businesses) {

            if (err){
                res.send(err);
            }

            res.json(businesses);

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
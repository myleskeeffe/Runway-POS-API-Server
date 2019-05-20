var product = require('../models/productList');

exports.getProducts = function(req, res, next){

    product.find(function(err, products) {

        if (err){
            res.send(err);
        }

        res.json(products);

    });

}

exports.createProduct = function(req, res, next){

    product.create({
        name : req.body.name,
        business : req.body.business,
        price : req.body.price
    }, function(err, todo) {

        if (err){
            res.send(err);
        }

        product.find(function(err, products) {

            if (err){
                res.send(err);
            }

            res.json(products);

        });

    });

}

exports.deleteProduct = function(req, res, next){

    product.remove({
        _id : req.params.product_id
    }, function(err, product) {
        res.json(product);
    });

}
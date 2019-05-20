var order = require('../models/orderList');

exports.getOrders = function(req, res, next){

    order.find(function(err, orders) {

        if (err){
            res.send(err);
        }

        res.json(orders);

    });

}

exports.createOrder = function(req, res, next){

    order.create({
        name : req.body.name,
        order : req.body.order,
        price : req.body.price
    }, function(err, todo) {

        if (err){
            res.send(err);
        }

        order.find(function(err, orders) {

            if (err){
                res.send(err);
            }

            res.json(orders);

        });

    });

}

exports.deleteOrder = function(req, res, next){

    order.remove({
        _id : req.params.order_id
    }, function(err, order) {
        res.json(order);
    });

}
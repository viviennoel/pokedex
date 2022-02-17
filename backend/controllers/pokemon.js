const Orders = require('../models/pokemon');
const ObjectId = require('mongodb').ObjectId;

exports.pokemonGetOne = (req, res, next) => {
    var id = new ObjectId(req.params.orderId);
    console.log(id);

    Orders.find({ _id: id }).then(
        (order) => {
            console.log(order);
            if (!order) {
                return res.status(405).json({ message: 'no order saved' });
            } else {
                console.log('Success')
                res.status(200).json(order);
            }
        })

        .catch(
            () => {
                res.status(500).send(new Error('Database error!'));
            }
        )
};

const db    = require('../config/database');

const Car   = db.cars;

// Create a car entry
exports.create = (req, res) => {
    Car.create({
        brand       : req.body.brand,
        model       : req.body.model,
        engineType  : req.body.engineType,
        year        : req.body.year
    }).then(car => {
        res.send(car);
    });
}

// FETCH all cars
exports.findAll = (req, res) => {
    Car.findAll().then(cars => {
      res.send(cars);
    });
};
    
// Find a car by Id
exports.findById = (req, res) => { 
    Car.findByPk(req.params.id).then(user => {
        res.send(user);
    });
};
    
// Update a car
exports.update = (req, res) => {
    const id = req.params.id;
    Car.update({ 
        brand       : req.body.brand,
        model       : req.body.model,
        engineType  : req.body.engineType,
        year        : req.body.year 
    },{ 
        where: {id: id}
    }).then(() => {
        res.status(200).send({ message: 'successfully updated a car with id = ' + id });
    });
};
    
// Delete a Car by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    if(isNaN(parseInt(id))) {
        res.status(422).send({ 
            message: 'Car deletion failed', errorAt: {
            id : 'Id should be a number'
        }})
    } else {
        Car.destroy({
            where: { id: id }
        }).then(() => {
            res.status(200).send({ message: 'successfully deleted a car with id = ' + id });
        });
    }
};

// Search from Car list
exports.search = (req, res) => {
    const searchYear = req.body.year
    const searchBrand = req.body.brand

    if (searchYear != null) {
        Car.findAll({
            where : { year : searchYear }
        }).then(cars => {
            res.send(cars);
        });
    } else if (searchBrand != null) {
        Car.findAll({
            where : { brand : brand }
        }).then(cars => {
            res.send(cars);
        });
    } else {
        res.status(400).send({ message: 'year or brand required.' + id })
    } 
}
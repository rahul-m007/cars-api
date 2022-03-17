const db    = require('../config/database');
const errorHandler = require('../utils/errorHandler')

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
    }).catch(err => errorHandler.validationError(res, err.errors, 'Car creation'));
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
    }).catch(err => errorHandler.validationError(res, err.errors, 'Fetching car details'));
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
    }).catch(err => errorHandler.validationError(res, err.errors, 'Updating car details'));
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
        }).catch(err => errorHandler.validationError(res, err.errors, 'Car deletion'));
    }
};

// Search from Car list
exports.search = (req, res) => {
    const searchYear = req.body.year
    const searchBrand = req.body.brand

    console.log('searchBrand', searchBrand)
    console.log('searchYear', searchYear)

    if (searchYear != null && searchYear.length > 0) {
        Car.findAll({
            where : { year : searchYear }
        }).then(cars => {
            res.send(cars);
        }).catch(err => errorHandler.validationError(res, err.errors, 'Car search'));
    } else if (searchBrand != null && searchBrand.length > 0) {
        Car.findAll({
            where : { brand : searchBrand }
        }).then(cars => {
            res.send(cars);
        }).catch(err => errorHandler.validationError(res, err.errors, 'Car search'));
    } else {
        res.status(400).send({ message: 'year or brand required.' })
    } 
}
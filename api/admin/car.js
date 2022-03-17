const subroute      = require('express').Router();
const cars          = require('../../controller/car.contoller')

module.exports = (route) => {
    route.use('/car', subroute)

    //[C] Create a new car
    subroute.post('/', cars.create)
    
    //[R] Read a car from id
    subroute.get('/:id', cars.findById)

    //[U] Update a car from id
    subroute.put('/:id', cars.update)

    //[D] Delete a car from id
    subroute.delete('/:id', cars.delete)

    //[S] Search from car list
    subroute.post('/search', cars.search)

    return route

}
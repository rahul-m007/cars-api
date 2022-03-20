const route         = require('express').Router();

module.exports = (app) => {
    // Either check admin specific verification here 
    // or create a middleware pipe to do the same.

    app.use('/admin', route)

    
    // Admin specific routes

    route.use('/car', require('./car')(route))

    // Any other admin routes will follow here
    // eg route.app('/visitor', require(visitor route page))

    return app
}
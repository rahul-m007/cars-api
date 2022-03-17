const Router 	= require('express').Router();
const admin     = require('./admin')

module.exports = () => {
    const app = Router;
    admin(app);

    // other route sets would come here
    // eg. user, client etc

    return app
}
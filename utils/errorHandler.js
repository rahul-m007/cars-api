/**
 * 
 * @param {Response} response | express response
 * @param {String} error | sequelize validation error
 * @param {String} operation | operation msg
 * 
 */

exports.validationError = (response, errors, operation) => {
    const errorSet = {}
    errors.map(error => {
        errorSet[error.path] = error.message;
    })

    response.status(422).send({ message: operation + ' failed', errorAt: errorSet });
}
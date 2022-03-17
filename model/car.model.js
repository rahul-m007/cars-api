// Car model definition
module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('cars', {
        brand       : {
            type        : DataTypes.STRING,
            allowNull   : false,
        },
        model       : {
            type        : DataTypes.STRING,
            allowNull   : false,
        },
        engineType  : {
            type        : DataTypes.ENUM,
            values      : ['electric', 'petrol', 'diesel'],
            allowNull   : false,
          },
        year        : {
            type        : DataTypes.INTEGER,
            allowNull   : false,
        }
    })

    return Car;
}
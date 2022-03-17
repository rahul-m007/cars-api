// Car model definition
module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('cars', {
        brand       : {
            type        : DataTypes.STRING,
            allowNull   : false,
            validate: {
                notNull: { msg: "Brand is required" },
              },
        },
        model       : {
            type        : DataTypes.STRING,
            allowNull   : false,
            validate: {
                notNull: { msg: "Model is required" },
            },
        },
        engineType  : {
            type        : DataTypes.ENUM,
            values      : ['electric', 'petrol', 'diesel'],
            allowNull   : false,
            validate: {
                notNull: { msg: "Engine Type is required" },
            },
          },
        year        : {
            type        : DataTypes.INTEGER,
            allowNull   : false,
            validate: {
                notNull: { msg: "Year is required" },
            },
        }
    })

    return Car;
}
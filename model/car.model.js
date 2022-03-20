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
                isIn: {
                    args: [['electric', 'petrol', 'diesel']],
                      msg: "Engine Type must be electric, petrol or diesel"
                  }
            },
        },
        year        : {
            type        : DataTypes.INTEGER,
            allowNull   : false,
            validate: {
                notNull: { msg: "Year is required" },
                customValidator(value) {
                    var year = parseInt(value)
                    if (isNaN(year)) {
                        throw new Error("Year should be a number");
                    }
                    if (year < 1672) {
                      throw new Error("The fast steam car was build in 1672. The manufacturing year should be after 1672");
                    }
                    else if(year>2022) {
                        throw new Error("The manufacturing year must be the same as or less than the current year");
                    }
                    
                  }
            },
        }
    })

    return Car;
}
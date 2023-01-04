const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        model_id: { 
            type: DataTypes.STRING, 
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        },
        model_name: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        model_description: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }
    };    

    const options = {
        defaultScope: {
            // exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Models', attributes, options);
}
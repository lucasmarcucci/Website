const Sequelize = require('sequelize');
const sequelize = require('../db/db2');

const Model = sequelize.define('Models', 
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        model_name: {
            type: Sequelize.STRING
        },
        model_description: {
            type: Sequelize.STRING
        }
    },
    { 
        timestamps: false 
    }
);

module.exports = Model;
const Sequelize = require('sequelize');
const sequelize = require('../db/db2');

const User = sequelize.define('Users', 
    {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        user_name: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.STRING
        },
        user_password: {
            type: Sequelize.STRING
        },
        user_role: {
            type: Sequelize.STRING
        }
    },
    { 
        timestamps: false 
    }
);

module.exports = User;
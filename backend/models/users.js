const Sequelize = require('sequelize');
const sequelize = require('../db/db2');

const User = sequelize.define('Users', 
    {
        user_name: {
            type: Sequelize.STRING
        },
        user_email: {
            type: Sequelize.STRING
        },
        user_password: {
            type: Sequelize.STRING
        }
    },
    { 
        timestamps: false 
    }
);

module.exports = User;

// module.exports = (sequelize, Sequelize) => {

//     const User = sequelize.define("Users", {
//         user_name: {
//             type: Sequelize.STRING
//         },
//         user_email: {
//             type: Sequelize.STRING
//         },
//         user_password: {
//             type: Sequelize.STRING
//         }
//     });
  
//     return User;
//   };
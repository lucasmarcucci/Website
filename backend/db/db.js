const tedious = require('tedious');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    const dialect = 'mssql';
    const host = 'localhost';
    const dbName = 'Killerbee'
    const userName = 'Test2';
    const password = 'Test2';
    // const { userName, password } = dbConfig.authentication.options;

    // connect to db
    const sequelize = new Sequelize(
        dbName, 
        userName, 
        password, 
        { 
            host, 
            dialect 
        }
    );

    // init models and add them to the exported db object
    db.Models = require('../models/models')(sequelize);

    // sync all models with database
    // await sequelize.sync({ alter: true });
}
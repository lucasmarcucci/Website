const Sequelize = require('sequelize');

const sequelize = new Sequelize('Killerbee', 'Test2', 'Test2', {
  host: 'localhost',
  dialect: 'mssql'
});

module.exports = sequelize;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('erinoDb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  
});

module.exports = sequelize;


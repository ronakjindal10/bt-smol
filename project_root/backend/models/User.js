const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = User;
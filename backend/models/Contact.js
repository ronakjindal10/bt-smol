const Sequelize = require('sequelize');
const db = require('../config/db');

const Contact = db.define('contact', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  karma: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = Contact;
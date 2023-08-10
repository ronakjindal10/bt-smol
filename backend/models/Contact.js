const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Define the Contact model
const Contact = sequelize.define('Contact', {
  // Define the name field
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Define the phone number field
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Define the karma field
  karma: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  // Define the user id field
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = Contact;
```javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

// Define User model
const User = sequelize.define('User', {
  // Google ID of the user
  googleId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  // Other model options go here
});

// We need to make sure that the connection is OK and the User model is valid
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
  User.sync();
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

module.exports = User;
```
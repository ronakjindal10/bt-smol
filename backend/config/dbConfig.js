```javascript
// Importing the dotenv package to use environment variables
require('dotenv').config();

// Function to get the database configuration
const getDbConfig = () => {
  return {
    connectionString: process.env.DATABASE_URL, // Getting the database URL from the .env file
    ssl: {
      rejectUnauthorized: false
    }
  };
};

// Exporting the getDbConfig function
module.exports = getDbConfig;
```
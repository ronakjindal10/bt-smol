```javascript
const { Pool } = require('pg');
require('dotenv').config();

// Create a new pool using the DATABASE_URL from the .env file
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Function to connect to the database
const connectDb = async () => {
  try {
    await pool.connect();
    console.log('Connected to the database');
  } catch (err) {
    console.error('Unable to connect to the database', err);
    process.exit(1);
  }
};

// Function to query the database
const query = async (text, params) => {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (err) {
    console.error('Error executing query', err);
    throw err;
  }
};

module.exports = {
  connectDb,
  query
};
```
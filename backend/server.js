```javascript
// Importing required modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Importing routes
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Importing db service
const dbService = require('./services/dbService');

// Loading environment variables
dotenv.config();

// Creating express app
const app = express();

// Enabling CORS
app.use(cors());

// Parsing JSON bodies
app.use(express.json());

// Using routes
app.use('/auth', authRoutes);
app.use('/contacts', contactRoutes);

// Function to start the server
const startServer = async () => {
  try {
    // Connecting to the database
    await dbService.connectDb();

    // Starting the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
};

// Starting the server
startServer();

module.exports = app;
```
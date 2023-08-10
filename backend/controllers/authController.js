```javascript
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const googlePeopleService = require('../services/googlePeopleService');

// Google's OAuth2 client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Function to authenticate user with Google
const googleAuth = async (req, res) => {
  const { token }  = req.body;

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID
  });

  const { name, email, picture } = ticket.getPayload();

  // Check if user exists in our database
  let user = await User.findOne({ email });

  if (user) {
    // User already exists in our database
    user = await User.findOneAndUpdate(
      { email },
      { name, picture },
      { new: true }
    );
  } else {
    // No user was found, create a new user
    user = await new User({ name, email, picture }).save();

    // Fetch user's contacts from Google People API
    const contacts = await googlePeopleService.getGoogleContacts(token);

    // Save contacts to our database
    user.contacts = contacts;
    await user.save();
  }

  // Send user info to the client
  res.send({ user });
};

module.exports = {
  googleAuth
};
```
const GoogleAuth = require('google-auth-library');

const CLIENT_ID = '656004779102-pvhdrf9m0m9o9sr0eou6b77stc8tv3kl.apps.googleusercontent.com';
const client = new GoogleAuth.OAuth2Client(CLIENT_ID);

module.exports = {
  verify: async (token) => {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload;
  }
};
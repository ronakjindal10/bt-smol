```javascript
import axios from 'axios';

const GOOGLE_CLIENT_ID = '656004779102-pvhdrf9m0m9o9sr0eou6b77stc8tv3kl.apps.googleusercontent.com';

export const signIn = async (googleUser) => {
  const id_token = googleUser.getAuthResponse().id_token;
  const response = await axios.post('/api/auth/google', { id_token });
  return response.data;
};

export const loadAuth2 = () => {
  return new Promise((resolve, reject) => {
    gapi.load('auth2', {
      callback: function() {
        gapi.auth2.init({
          client_id: GOOGLE_CLIENT_ID,
          scope: 'https://www.googleapis.com/auth/contacts.readonly'
        }).then(resolve, reject);
      },
      onerror: reject,
      timeout: 5000,
      ontimeout: reject
    });
  });
};

export const signOut = () => {
  const auth2 = gapi.auth2.getAuthInstance();
  return auth2.signOut();
};
```
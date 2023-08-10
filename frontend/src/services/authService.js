```javascript
import axios from 'axios';

// Function to handle sign in with Google
const signInWithGoogle = async (tokenId) => {
  try {
    // Send a POST request to the backend with the Google token ID
    const response = await axios.post('/api/auth/google', { tokenId });

    // If the request is successful, return the user data
    if (response.status === 200) {
      return response.data;
    }

    // If the request fails, throw an error
    throw new Error('Google Sign In failed');
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { signInWithGoogle };
```
```javascript
import React from 'react';
import { signInWithGoogle } from '../services/authService';

// This component is responsible for rendering the Google Sign In button
// and handling the sign in process
const SignIn = () => {
  // This function will be triggered when the user clicks on the Sign In button
  const handleSignIn = async () => {
    try {
      // Call the signInWithGoogle function from authService
      // This function will handle the Google authentication process
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return (
    <div>
      <button id="google-signin-btn" onClick={handleSignIn}>
        Google Sign In
      </button>
    </div>
  );
};

export default SignIn;
```
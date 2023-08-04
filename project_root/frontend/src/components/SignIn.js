```javascript
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { authService } from '../services/authService';

const SignIn = () => {
  const responseGoogle = (response) => {
    authService.signIn(response.tokenId);
  }

  return (
    <div>
      <GoogleLogin
        clientId="656004779102-pvhdrf9m0m9o9sr0eou6b77stc8tv3kl.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default SignIn;
```
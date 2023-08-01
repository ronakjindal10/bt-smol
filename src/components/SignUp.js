import React from 'react';
import { GoogleAuth } from '../utils/GoogleAuth';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedUp: false,
      userId: null
    };
  }

  handleSignUp = async () => {
    try {
      const { isSignedUp, userId } = await GoogleAuth.signUp();
      this.setState({ isSignedUp, userId });
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  }

  render() {
    const { isSignedUp } = this.state;

    return (
      <div>
        {!isSignedUp ? (
          <button id="sign-up-button" onClick={this.handleSignUp}>
            Sign Up with Google
          </button>
        ) : (
          <p>You are signed up!</p>
        )}
      </div>
    );
  }
}

export default SignUp;
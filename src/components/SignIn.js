import React from 'react';
import { GoogleAuth } from '../utils/GoogleAuth';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      userId: null,
      errorMessage: null
    };
  }

  componentDidMount() {
    GoogleAuth.init()
      .then(() => {
        this.setState({ isSignedIn: GoogleAuth.isSignedIn.get() });
        GoogleAuth.isSignedIn.listen(this.updateSigninStatus);
      })
      .catch(err => {
        this.setState({ errorMessage: err.message });
      });
  }

  updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      this.setState({ 
        isSignedIn: true,
        userId: GoogleAuth.currentUser.get().getId()
      });
    } else {
      this.setState({ isSignedIn: false, userId: null });
    }
  }

  handleSignInClick = () => {
    GoogleAuth.signIn();
  }

  handleSignOutClick = () => {
    GoogleAuth.signOut();
  }

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (this.state.isSignedIn) {
      return (
        <div>
          <button id="sign-out-button" onClick={this.handleSignOutClick}>
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button id="sign-in-button" onClick={this.handleSignInClick}>
            Sign In with Google
          </button>
        </div>
      );
    }
  }
}

export default SignIn;
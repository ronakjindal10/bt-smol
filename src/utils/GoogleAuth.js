import axios from 'axios';

const GoogleAuth = {
  signIn: async (googleData) => {
    try {
      const res = await axios.post("/api/auth/google", {
        token: googleData.tokenId
      });
      return { type: 'SIGN_IN_SUCCESS', payload: res.data };
    } catch (err) {
      return { type: 'SIGN_IN_FAILURE', payload: err.response.data };
    }
  },

  signUp: async (googleData) => {
    try {
      const res = await axios.post("/api/auth/google/signup", {
        token: googleData.tokenId
      });
      return { type: 'SIGN_IN_SUCCESS', payload: res.data };
    } catch (err) {
      return { type: 'SIGN_IN_FAILURE', payload: err.response.data };
    }
  }
};

export default GoogleAuth;
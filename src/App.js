import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ContactList from './components/ContactList';
import GoogleAuth from './utils/GoogleAuth';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const checkUser = async () => {
      const user = await GoogleAuth.signIn();
      if (user) {
        setUser(user);
        const contacts = await GoogleAuth.fetchContacts(user);
        setContacts(contacts);
      }
    };
    checkUser();
  }, []);

  const handleSignIn = async () => {
    const user = await GoogleAuth.signIn();
    setUser(user);
  };

  const handleSignUp = async () => {
    const user = await GoogleAuth.signUp();
    setUser(user);
  };

  return (
    <div className="App">
      {!user ? (
        <div>
          <SignIn onSignIn={handleSignIn} />
          <SignUp onSignUp={handleSignUp} />
        </div>
      ) : (
        <ContactList contacts={contacts} />
      )}
    </div>
  );
}

export default App;
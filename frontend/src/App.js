import React, { useState, useEffect } from 'react';
import SignIn from './components/SignIn';
import ContactList from './components/ContactList';
import { signInWithGoogle } from './services/authService';
import { getContacts } from './services/contactService';

function App() {
  // State to hold the user's ID
  const [userId, setUserId] = useState(null);

  // State to hold the list of contacts
  const [contacts, setContacts] = useState([]);

  // Function to handle sign in with Google
  const handleSignIn = async () => {
    const id = await signInWithGoogle();
    setUserId(id);
  };

  // Function to fetch contacts from the backend
  const fetchContacts = async () => {
    const contacts = await getContacts(userId);
    setContacts(contacts);
  };

  // Fetch contacts whenever the user ID changes
  useEffect(() => {
    if (userId) {
      fetchContacts();
    }
  }, [userId]);

  return (
    <div className="App">
      {!userId ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <ContactList contacts={contacts} onRefresh={fetchContacts} />
      )}
    </div>
  );
}

export default App;
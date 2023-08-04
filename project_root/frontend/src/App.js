import React, { useEffect, useState } from 'react';
import SignIn from './components/SignIn';
import ContactList from './components/ContactList';
import authService from './services/authService';
import contactService from './services/contactService';

function App() {
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const loggedInUser = authService.getLoggedInUser();
    if (loggedInUser) {
      setUser(loggedInUser);
      fetchContacts(loggedInUser.id);
    }
  }, []);

  const fetchContacts = async (userId) => {
    const fetchedContacts = await contactService.getContacts(userId);
    setContacts(fetchedContacts);
  };

  const handleSignIn = (user) => {
    setUser(user);
    fetchContacts(user.id);
  };

  const handleKarmaUpdate = async (contactId) => {
    const updatedContacts = await contactService.updateKarma(contactId);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      {!user ? (
        <SignIn onSignIn={handleSignIn} />
      ) : (
        <ContactList contacts={contacts} onKarmaUpdate={handleKarmaUpdate} />
      )}
    </div>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem';
import { getContacts } from '../services/contactService';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the backend
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await getContacts();
    if (response && response.data) {
      // Sort contacts in descending order of karma
      const sortedContacts = response.data.sort((a, b) => b.karma - a.karma);
      setContacts(sortedContacts);
    }
  };

  return (
    <div id="contact-list">
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onKarmaChange={fetchContacts} />
      ))}
    </div>
  );
}

export default ContactList;
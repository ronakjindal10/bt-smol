import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem';
import { ContactsAPI } from '../utils/ContactsAPI';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await ContactsAPI.getContacts();
      if (response.status === 200) {
        setContacts(response.data.contacts);
      }
    } catch (error) {
      console.error('Failed to fetch contacts', error);
    }
  };

  return (
    <div id="contact-list">
      {contacts.sort((a, b) => b.karma - a.karma).map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
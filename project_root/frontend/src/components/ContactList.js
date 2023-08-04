import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem';
import contactService from '../services/contactService';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await contactService.fetchContacts();
    if (response.status === 200) {
      setContacts(response.data.contacts);
    }
  };

  const sortedContacts = contacts.sort((a, b) => b.karma - a.karma);

  return (
    <div id="contactList">
      {sortedContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
```javascript
import React from 'react';
import { increaseKarma } from '../services/contactService';

// ContactItem component represents a single contact in the contact list
const ContactItem = ({ contact, refreshContacts }) => {
  // Function to handle the click on the 'BT' button
  const handleIncreaseKarma = async () => {
    try {
      // Call the increaseKarma function from contactService to increase the karma of the contact
      await increaseKarma(contact.id);
      // Refresh the contacts list to reflect the updated karma
      refreshContacts();
    } catch (error) {
      console.error('Failed to increase karma:', error);
    }
  };

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.karma}</td>
      <td>
        <button id='bt-btn' onClick={handleIncreaseKarma}>BT</button>
      </td>
    </tr>
  );
};

export default ContactItem;
```
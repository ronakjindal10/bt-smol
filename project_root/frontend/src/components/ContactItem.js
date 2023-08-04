import React from 'react';
import KarmaButton from './KarmaButton';

const ContactItem = ({ contact, updateKarma }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.karma}</td>
      <td>
        <KarmaButton 
          onClick={() => updateKarma(contact.id)}
        />
      </td>
    </tr>
  );
};

export default ContactItem;
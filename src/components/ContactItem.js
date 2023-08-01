import React from 'react';
import KarmaButton from './KarmaButton';
import '../styles/ContactItem.css';

const ContactItem = ({ contact }) => {
    return (
        <div className="contact-item">
            <div className="contact-name">
                {contact.name}
            </div>
            <div className="contact-karma">
                {contact.karma}
            </div>
            <KarmaButton contactId={contact.id} />
        </div>
    );
};

export default ContactItem;
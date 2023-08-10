```javascript
const { google } = require('googleapis');
const people = google.people('v1');
require('dotenv').config();

// Function to get Google Contacts
const getGoogleContacts = async (auth) => {
  try {
    const res = await people.people.connections.list({
      resourceName: 'people/me',
      personFields: 'names,phoneNumbers',
      auth: auth,
    });

    // Extract names and canonical phone numbers
    const contacts = res.data.connections.map((contact) => {
      const name = contact.names && contact.names.length > 0 ? contact.names[0].displayName : '';
      const phoneNumber = contact.phoneNumbers && contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].canonicalForm : '';

      return { name, phoneNumber };
    });

    return contacts;
  } catch (error) {
    console.error('Error fetching Google Contacts:', error);
    throw error;
  }
};

module.exports = { getGoogleContacts };
```
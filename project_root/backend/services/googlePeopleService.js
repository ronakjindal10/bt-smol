const { google } = require('googleapis');
const people = google.people('v1');

const getContacts = async (auth) => {
  const res = await people.people.connections.list({
    resourceName: 'people/me',
    personFields: 'names,phoneNumbers',
    auth: auth,
  });

  return res.data.connections.map((contact) => {
    const name = contact.names && contact.names.length > 0 ? contact.names[0].displayName : '';
    const phoneNumber = contact.phoneNumbers && contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].canonicalForm : '';
    return { name, phoneNumber };
  });
};

module.exports = {
  getContacts,
};
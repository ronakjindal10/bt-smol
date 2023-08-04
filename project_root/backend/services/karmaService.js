const Contact = require('../models/Contact');

const increaseKarma = async (phoneNumber) => {
  try {
    const contact = await Contact.findOne({ phoneNumber });
    if (!contact) {
      throw new Error('Contact not found');
    }
    contact.karma += 1;
    await contact.save();
    return contact;
  } catch (error) {
    throw error;
  }
};

const getKarma = async (phoneNumber) => {
  try {
    const contact = await Contact.findOne({ phoneNumber });
    if (!contact) {
      throw new Error('Contact not found');
    }
    return contact.karma;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  increaseKarma,
  getKarma,
};
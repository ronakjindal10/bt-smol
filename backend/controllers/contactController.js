const Contact = require('../models/Contact');

// Function to get contacts of a user
exports.getContacts = async (req, res) => {
  try {
    const userId = req.user.id;
    const contacts = await Contact.find({ userId: userId }).sort({ karma: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Function to increase karma of a contact
exports.increaseContactKarma = async (req, res) => {
  try {
    const contactId = req.params.id;
    let contact = await Contact.findById(contactId);

    if (!contact) {
      return res.status(404).json({ msg: 'Contact not found' });
    }

    contact.karma += 1;
    await contact.save();

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
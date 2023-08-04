```javascript
const Contact = require('../models/Contact');
const KarmaService = require('../services/karmaService');

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ userId: req.user.id }).sort({ karma: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateKarma = async (req, res) => {
    try {
        const contact = await Contact.findOne({ userId: req.user.id, phoneNumber: req.body.phoneNumber });
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        contact.karma = KarmaService.increaseKarma(contact.karma);
        await contact.save();
        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
```
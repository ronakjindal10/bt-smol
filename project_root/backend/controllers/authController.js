```javascript
const User = require('../models/User');
const googlePeopleService = require('../services/googlePeopleService');

exports.googleSignIn = async (req, res) => {
    const { tokenId } = req.body;

    const googleUser = await googlePeopleService.verify(tokenId);
    if (!googleUser) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    let user = await User.findOne({ googleId: googleUser.sub });
    if (!user) {
        user = new User({
            googleId: googleUser.sub,
            email: googleUser.email,
            name: googleUser.name,
            picture: googleUser.picture,
        });
        await user.save();
    }

    const contacts = await googlePeopleService.getContacts(tokenId);
    if (contacts) {
        user.contacts = contacts;
        await user.save();
    }

    res.json({ user, contacts });
};
```
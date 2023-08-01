Shared Dependencies:

1. Exported Variables:
   - `GoogleAuth` from `src/utils/GoogleAuth.js`
   - `ContactsAPI` from `src/utils/ContactsAPI.js`
   - `KarmaAPI` from `src/utils/KarmaAPI.js`

2. Data Schemas:
   - `User` schema in `backend/models/User.js`
   - `Contact` schema in `backend/models/Contact.js`

3. ID Names of DOM Elements:
   - `sign-in-button` in `src/components/SignIn.js`
   - `sign-up-button` in `src/components/SignUp.js`
   - `contact-list` in `src/components/ContactList.js`
   - `contact-item` in `src/components/ContactItem.js`
   - `karma-button` in `src/components/KarmaButton.js`

4. Message Names:
   - `SIGN_IN_SUCCESS` and `SIGN_IN_FAILURE` in `src/utils/GoogleAuth.js`
   - `FETCH_CONTACTS_SUCCESS` and `FETCH_CONTACTS_FAILURE` in `src/utils/ContactsAPI.js`
   - `UPDATE_KARMA_SUCCESS` and `UPDATE_KARMA_FAILURE` in `src/utils/KarmaAPI.js`

5. Function Names:
   - `signIn` and `signUp` in `src/components/SignIn.js` and `src/components/SignUp.js`
   - `fetchContacts` in `src/components/ContactList.js`
   - `updateKarma` in `src/components/KarmaButton.js`
   - `authUser` in `backend/controllers/authController.js`
   - `getContacts` and `storeContacts` in `backend/controllers/contactController.js`
   - `increaseKarma` in `backend/controllers/karmaController.js`

6. Shared Packages:
   - `react` in frontend files
   - `express` in backend files
   - `jsonwebtoken` in `backend/utils/jwtUtils.js`
   - `pg` (PostgreSQL client) in `backend/config/db.js`
   - `dotenv` in `.env` files
   - `cors` in `backend/server.js`
   - `axios` in `src/utils/GoogleAuth.js`, `src/utils/ContactsAPI.js`, `src/utils/KarmaAPI.js`
   - `google-auth-library` in `backend/config/googleAuth.js`
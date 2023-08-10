Shared Dependencies:

1. Environment Variables: GOOGLE_CLIENT_ID, DATABASE_URL in .env file.

2. Data Schemas: User and Contact schemas in User.js and Contact.js respectively.

3. Exported Variables: 
   - In authService.js: signInWithGoogle
   - In contactService.js: getContacts, increaseKarma
   - In googlePeopleService.js: getGoogleContacts
   - In dbService.js: connectDb
   - In authController.js: googleAuth
   - In contactController.js: getContacts, increaseContactKarma
   - In authRoutes.js: router
   - In contactRoutes.js: router

4. DOM Element IDs: 
   - In SignIn.js: 'google-signin-btn'
   - In ContactList.js: 'contact-list'
   - In ContactItem.js: 'bt-btn'

5. Message Names: 
   - In SignIn.js: 'Google Sign In'
   - In ContactList.js: 'Contact List'
   - In ContactItem.js: 'Increase Karma'

6. Function Names: 
   - In App.js: render
   - In SignIn.js: signInWithGoogle
   - In ContactList.js: getContacts, sortContacts
   - In ContactItem.js: increaseKarma
   - In authService.js: signInWithGoogle
   - In contactService.js: getContacts, increaseKarma
   - In server.js: startServer
   - In authRoutes.js: googleAuthRoute
   - In contactRoutes.js: getContactsRoute, increaseKarmaRoute
   - In authController.js: googleAuth
   - In contactController.js: getContacts, increaseContactKarma
   - In googlePeopleService.js: getGoogleContacts
   - In dbService.js: connectDb
   - In dbConfig.js: getDbConfig

7. Package Dependencies: 
   - In package.json (root, frontend, backend): react, react-dom, react-scripts, express, cors, dotenv, pg, google-auth-library, axios, nodemon (devDependency).
# Full Stack Project

This project is a full stack application that allows users to sign in with Google, fetch their contacts, and increase a 'karma' value for each contact. The application is built with a React frontend, a Node.js backend, and a PostgreSQL database.

## Getting Started

To get started with this project, clone the repository and install the dependencies in both the frontend and backend directories.

```bash
git clone <repository-url>
cd frontend && npm install
cd ../backend && npm install
```

## Environment Variables

You need to set up environment variables for the application to function correctly. Create a `.env` file in the root directory and add the following variables:

- `GOOGLE_CLIENT_ID`: Your Google Client ID for OAuth
- `DATABASE_URL`: Your PostgreSQL database URL

## Running the Application

To start the application, you need to start both the frontend and backend servers.

In the frontend directory, run:

```bash
npm start
```

In the backend directory, run:

```bash
npm run dev
```

## Application Flow

1. The user is presented with an option to sign in with Google when they visit the website. This is handled by the `SignIn` component and the `signInWithGoogle` function in `authService.js`.

2. After signing in, first-time users are asked for permission to read their Google contacts. This is done using the Google People API, with the `getGoogleContacts` function in `googlePeopleService.js`.

3. The names and phone numbers of the user's contacts are fetched and stored in the backend, along with the user's ID. This is done in the `getContacts` function in `contactController.js` and the `getContacts` function in `contactService.js`.

4. The user is then shown a list of their contacts, along with a 'karma' value and a 'BT' button for each contact. This is displayed by the `ContactList` component and each contact is a `ContactItem` component.

5. When the 'BT' button is clicked, the karma value for that contact is increased by 1. This is handled by the `increaseKarma` function in `ContactItem.js`, `increaseKarma` function in `contactService.js`, and the `increaseContactKarma` function in `contactController.js`.

6. The updated karma value is then displayed on the website, and the contacts are sorted in descending order of karma. This is done in the `sortContacts` function in `ContactList.js`.

7. For existing users, the flow is the same from step 4 onwards.

8. The karma value is associated with the phone number, so if multiple users increase the karma for the same phone number, the displayed karma is the sum of all increases.

## Deployment

The application is ready to be deployed on Vercel. Make sure to add the environment variables in the Vercel dashboard.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
# Full Stack Project

This is a full stack project using React for the frontend, Node.js for the backend, and PostgreSQL for the database. The application is deployed on Vercel.

## Overview

The application allows users to sign up/in with their Google account. On their first visit, the application asks for permission to read their contacts linked to their Google account. The names and canonical phone numbers of these contacts are stored in the backend along with the user’s ID. The user is then shown a list of contact names along with a ‘karma’ column and a ‘BT’ button with each row (contact name). If the user clicks on ‘BT’, the karma of that contact is increased by 1. The user will now see the updated karma on the website. Contacts are sorted in descending order of karma.

For returning users, the application shows them the list of their contact names with karma and BT button. If the user clicks on ‘BT’, the karma of that contact is increased by 1.

## Project Structure

The project is divided into frontend and backend sections. The frontend is built with React and the backend with Node.js.

Frontend files are located in the `src` directory and backend files are located in the `backend` directory.

## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`

## Environment Variables

You need to set up environment variables in `.env` file. Here are the variables you need to set:

- `REACT_APP_GOOGLE_CLIENT_ID`: Your Google Client ID for OAuth
- `REACT_APP_BACKEND_URL`: The URL of your backend server

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
# Backend Service

This is the backend service for our full stack project. It is built with Node.js and uses PostgreSQL for the database. The backend service handles user authentication, fetching contacts from Google People API, and managing contact karma.

## Getting Started

1. Install Node.js and npm if you haven't already. You can download them from [here](https://nodejs.org/en/download/).

2. Clone the repository and navigate to the backend directory:

```bash
git clone <repository-url>
cd project_root/backend
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server will start running at `http://localhost:5000`.

## Directory Structure

- `index.js`: The entry point of our application.
- `routes/`: Contains all the route handlers.
- `controllers/`: Contains all the controller functions.
- `models/`: Contains the data models.
- `services/`: Contains the services for Google People API and karma management.
- `config/`: Contains the configuration for database and Google authentication.

## Environment Variables

You need to set the following environment variables:

- `GOOGLE_CLIENT_ID`: Your Google Client ID.
- `DB_URL`: Your PostgreSQL database URL.

You can set them in a `.env` file in the root directory of the backend service.

## Deployment

We're going to deploy this on Vercel. Please follow the instructions in the main [README.md](../README.md) for deployment.

## Contributing

Please read [CONTRIBUTING.md](../CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](../LICENSE.md) file for details.
# Notes Frontend

This is the frontend of the Notes application, built with **React**.

## Features

- Display a list of notes
- Create new notes
- Toggle note importance
- Error notifications when server operations fail

## Technologies

- React
- JavaScript
- Axios

## Development

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

The frontend communicates with the backend via a REST API.

## Configuration

The frontend currently uses a fixed backend base URL during development.
Environment variables can be added later (e.g. `VITE_API_URL`) when deploying to different environments.




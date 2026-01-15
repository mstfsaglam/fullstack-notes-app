# Notes Backend

This is the backend for the Notes application, implemented with **Node.js** and **Express**.

## Features

- REST API for managing notes
- Endpoints for:
  - Fetching all notes
  - Fetching a single note
  - Creating a new note
  - Updating a note
  - Deleting a note
- Request logging with Morgan
- Error handling and unknown endpoint middleware

## Technologies

- Node.js
- Express
- Morgan

## Development

Install dependencies:

```bash
npm install
```

Run the server in development mode:

```bash
npm run dev
```

## Notes

Data is stored in memory during development.
Persistence will be added later using a database as part of the course progression.

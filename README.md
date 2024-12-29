# Dicoding Hapi Web Server

![Node.js](https://img.shields.io/badge/Node.js-v14.17.0-green) ![Hapi.js](https://img.shields.io/badge/Hapi.js-v20.1.5-blue) ![License](https://img.shields.io/badge/license-MIT-brightgreen)

This project is a basic web server built using Node.js and Hapi.js. It demonstrates how to create and configure a web server, define routes, and handle HTTP requests. This project is part of the Dicoding "Belajar Membuat Aplikasi Back-End untuk Pemula" course.

---

## Features

- Serve static files
- Handle basic HTTP routes (GET, POST, PUT, DELETE)
- Learn fundamental server configuration with Hapi.js

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yorizpra/dicoding_hapi-web-server.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dicoding_hapi-web-server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. The server will run at:
   ```
   http://localhost:5000
   ```

---

## API Endpoints

### 1. Home Route
- **URL**: `/`
- **Method**: `GET`
- **Response**:
  - `200 OK`: Welcome message.

### 2. About Route
- **URL**: `/about`
- **Method**: `GET`
- **Response**:
  - `200 OK`: About page content.

### 3. POST Example
- **URL**: `/notes`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "string",
    "body": "string"
  }
  ```
- **Response**:
  - `201 Created`: Note successfully saved.

### 4. PUT Example
- **URL**: `/notes/{id}`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "title": "string",
    "body": "string"
  }
  ```
- **Response**:
  - `200 OK`: Note successfully updated.
  - `404 Not Found`: Note ID not found.

### 5. DELETE Example
- **URL**: `/notes/{id}`
- **Method**: `DELETE`
- **Response**:
  - `200 OK`: Note successfully deleted.
  - `404 Not Found`: Note ID not found.

---

## Project Structure

```
├── src
│   ├── routes.js         # API route definitions
│   ├── handler.js        # Route handler functions
│   ├── server.js         # Hapi.js server setup
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Dicoding](https://www.dicoding.com/) for providing the learning platform.
- [Hapi.js](https://hapi.dev/) for the web framework.

---

Feel free to contribute to this project by submitting issues or pull requests!

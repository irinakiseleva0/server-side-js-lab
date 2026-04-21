# Server-Side JavaScript Lab - Course API

## 📌 Overview

This project is a RESTful API built with Node.js, Express, and MongoDB (Atlas).
It provides full CRUD functionality for managing courses in a database.

## 🚀 Features

* Create a new course
* Get all courses
* Get a course by ID
* Update a course
* Delete a course
* Protected routes using authentication middleware

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv

## 📂 Project Structure

```
project-root/
│
├── controllers/
│   └── courseController.js
├── middleware/
│   └── auth-middleware.js
├── models/
│   └── courseModel.js
├── routes/
│   └── courseRoute.js
├── services/
│   └── courseService.js
├── index.js
├── .env
├── package.json
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

## ▶️ Run the Project

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Server will run on:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### Base URL:

```
http://localhost:3000/api/course
```

### 🔹 Get all courses

```
GET /
```

### 🔹 Get course by ID

```
GET /:id
```

### 🔹 Create course

```
POST /
```

Body (JSON):

```
{
  "title": "Backend Development",
  "description": "Node.js course",
  "credits": 3,
  "instructor": "John Doe"
}
```

### 🔹 Update course

```
PUT /:id
```

### 🔹 Delete course

```
DELETE /:id
```

---

## 🔐 Authentication

All routes are protected by a simple authentication middleware.

Add header in requests:

```
Authorization: Bearer test123
```

If the token is missing or incorrect:

```
401 Unauthorized
```

---

## ✅ Status Codes

* 200 OK – Successful request
* 201 Created – Resource created
* 400 Bad Request – Invalid data
* 401 Unauthorized – Missing/invalid token
* 404 Not Found – Resource not found

---

## 📬 Testing

Use Postman to test all endpoints.

---

## 👩‍💻 Author
Irina Kiseleva

# Employee Management System (MERN Stack)

## Overview

The **Employee Management System** is a full-stack web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It enables secure employee management with JWT-based authentication and provides complete CRUD (Create, Read, Update, Delete) functionality.

The application includes a modern responsive dashboard where users can manage employee records, search employees by name, and navigate employee data using pagination.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Employee Management

* Add Employee
* View Employee List
* Update Employee Details
* Delete Employee
* Search Employee by Name
* Employee Pagination

### Dashboard

* Statistics Cards
* Responsive Layout
* Modern UI using Tailwind CSS
* Logout Functionality

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* CORS

---

# Project Structure

```
employee-management-system/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

# Project Setup Instructions

## 1. Clone the Repository

```bash
git clone https://github.com/sophia310/employee-management-system
```

Navigate into the project directory:

```bash
cd employee-management-system
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the **backend** folder.

Add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Replace the values with your own MongoDB Atlas connection string and JWT secret.

---

## 5. Run Backend

```bash
cd backend
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

## 6. Run Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Environment Variables

The backend requires the following environment variables:

| Variable   | Description                            |
| ---------- | -------------------------------------- |
| PORT       | Backend server port                    |
| MONGO_URI  | MongoDB Atlas connection string        |
| JWT_SECRET | Secret key used to generate JWT tokens |

Example:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/employeeDB
JWT_SECRET=mysecretkey123
```

---

# API Documentation

## Authentication APIs

### Register User

**POST**

```
/api/auth/register
```

Request Body

```json
{
  "name": "Sophia",
  "email": "sophia@example.com",
  "password": "123456"
}
```

---

### Login User

**POST**

```
/api/auth/login
```

Request Body

```json
{
  "email": "sophia@example.com",
  "password": "123456"
}
```

Returns

```json
{
  "token": "JWT_TOKEN"
}
```

---

# Employee APIs

## Get All Employees

**GET**

```
/api/employees
```

---

## Add Employee

**POST**

```
/api/employees
```

Request Body

```json
{
  "fullName": "Rahul Sharma",
  "email": "rahul@example.com",
  "mobile": "9876543210",
  "department": "IT",
  "designation": "Developer",
  "joiningDate": "2024-01-15"
}
```

---

## Update Employee

**PUT**

```
/api/employees/:id
```

---

## Delete Employee

**DELETE**

```
/api/employees/:id
```

---

## Search Employee

**GET**

```
/api/employees/search?name=Rahul
```

---

# Deployment Details

## Frontend Deployment

The frontend is deployed using:

* Vercel
---

## Backend Deployment

The backend is deployed using:

* Render

---

## Database

MongoDB Atlas is used as the cloud database.

---

# Future Enhancements

* Employee Profile Images
* Department Filter
* Sorting Employees
* Export Employee Data to CSV
* Dashboard Charts
* Redux Toolkit Integration
* Role-Based Authentication

---

# Author

**Sophia Pattekari**

MCA Student | MERN Stack Developer

---

# Employee Management System

A full-stack MERN application for managing employees with secure authentication and CRUD operations.

## Features

- User Registration
- User Login with JWT Authentication
- Add Employee
- View Employee List
- Search Employee
- Delete Employee
- Protected Routes
- MongoDB Atlas Database

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Vite

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcryptjs

### Database
- MongoDB Atlas
- Mongoose

## Project Structure

EmployeeManagementSystem/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── pages/
│ ├── services/
│ └── App.jsx

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a .env file inside backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## Author

Nikhil Patil

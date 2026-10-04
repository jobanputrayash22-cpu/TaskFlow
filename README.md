# TaskFlow – Task Management System

TaskFlow is a simple Task Management System developed using **React.js** for the frontend and **FastAPI** for the backend. It allows users to register, login securely using JWT authentication, and manage their personal tasks.

## 🚀 Features

- User Registration
- User Login
- JWT Authentication
- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- Mark Tasks as Completed/Pending
- Search Tasks
- User-specific Tasks
- Logout
- RESTful API
- Swagger API Documentation

## 🛠️ Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Python
- FastAPI
- SQLAlchemy
- JWT Authentication
- Pydantic

### Database
- SQLite / SQL Database configured in the backend

## 📁 Project Structure

```text
TaskFlow/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── dependencies.py
│   │   │
│   │   └── routers/
│   │       ├── auth.py
│   │       └── tasks.py
│   │
│   └── requirements.txt
│
└── README.md
```

## 🔐 Authentication

TaskFlow uses **JWT (JSON Web Token)** authentication.

After successful login, the JWT token is stored in the browser's local storage.

The token is then sent with protected API requests using:

```text
Authorization: Bearer <token>
```

Only authenticated users can access and manage their tasks.

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| POST | `/tasks/` | Create a task |
| GET | `/tasks/` | Get all user tasks |
| GET | `/tasks/{task_id}` | Get a specific task |
| PUT | `/tasks/{task_id}` | Update a task |
| DELETE | `/tasks/{task_id}` | Delete a task |

### Search

Tasks can also be searched using:

```text
GET /tasks/?search=task_name
```

Tasks can be filtered using the completed parameter:

```text
GET /tasks/?completed=true
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd TaskFlow
```

## 🖥️ Backend Setup

Open a terminal inside the backend directory:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

```text
http://127.0.0.1:8000
```

## 📚 Swagger API Documentation

FastAPI automatically provides API documentation.

Open:

```text
http://127.0.0.1:8000/docs
```

## 🌐 Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the React application:

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

## 🔄 Application Flow

```text
User
 │
 ▼
Register
 │
 ▼
Login
 │
 ▼
JWT Token Generated
 │
 ▼
Dashboard
 │
 ├── Add Task
 ├── View Tasks
 ├── Search Task
 ├── Edit Task
 ├── Complete Task
 └── Delete Task
```

## 🧪 Testing

The following functionality has been tested:

- User registration
- User login
- JWT authentication
- CORS configuration
- Task creation
- Task listing
- Task searching
- Task editing
- Task completion
- Task deletion
- Logout
- Protected dashboard access

## 📸 Screenshots

Add project screenshots here:

1. Registration Page
2. Login Page
3. Dashboard
4. Add Task
5. Edit Task
6. Completed Task
7. Search Task
8. Swagger API Documentation

Example:

```text
screenshots/
├── register.png
├── login.png
├── dashboard.png
├── add-task.png
├── edit-task.png
├── completed-task.png
└── swagger.png
```

## 🎯 Project Objective

The main objective of TaskFlow is to develop a simple and secure task management application using modern web technologies. The project demonstrates frontend-backend integration, REST API development, database operations, authentication, and CRUD functionality.

## 📌 Conclusion

TaskFlow successfully provides a complete task management solution with user authentication and CRUD operations. The project demonstrates how a React frontend can communicate with a FastAPI backend through REST APIs while maintaining authenticated and user-specific task data.

## 👨‍💻 Developer

**Yash Jobanputra**

TaskFlow – Task Management System
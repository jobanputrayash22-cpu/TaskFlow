# TaskFlow - Task Management System

TaskFlow is a full-stack Task Management System developed using React.js and FastAPI. It allows users to register, login securely, and manage their personal tasks with CRUD operations.

## Live Demo

### Frontend
https://taskflow-10g1.onrender.com

### Backend API
https://taskflow-api-ty4q.onrender.com

### API Documentation
https://taskflow-api-ty4q.onrender.com/docs

### GitHub Repository
https://github.com/jobanputrayash22-cpu/TaskFlow

---

## Features

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
- Input Validation
- Error Handling
- REST API
- Swagger API Documentation
- Responsive UI

---

## Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

### Backend
- Python
- FastAPI
- SQLAlchemy
- JWT Authentication
- Passlib
- Bcrypt

### Database
- SQLite

### Deployment
- Render
- GitHub

---

## Project Structure

```text
TaskFlow/
│
├── task-management-api/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── auth.py
│   │   ├── dependencies.py
│   │   └── routers/
│   │       ├── auth.py
│   │       └── tasks.py
│   │
│   └── requirements.txt
│
└── task-management-frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   └── Dashboard.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    └── package.json


Authentication
TaskFlow uses JWT-based authentication.
1. User registers with username, email and password.
2. User logs in using credentials.
3. Backend validates the credentials.
4. A JWT access token is generated.
5. The token is stored on the frontend.
6. Protected task APIs use the token for authentication.
CRUD Operations
TaskFlow provides complete CRUD functionality:
Create
Users can create a new task with a title and description.
Read
Users can view their tasks and search tasks.
Update
Users can edit task details and change task status.
Delete
Users can delete existing tasks.
API Endpoints
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login user
POST	/tasks/	Create a task
GET	/tasks/	Get all tasks
GET	/tasks/{task_id}	Get a single task
PUT	/tasks/{task_id}	Update a task
DELETE	/tasks/{task_id}	Delete a task


API Documentation
FastAPI automatically provides interactive Swagger documentation.
API Documentation:
https://taskflow-api-ty4q.onrender.com/docs
The Swagger interface can be used to test the available API endpoints.
Installation and Setup
Backend
Clone the repository:
git clone https://github.com/jobanputrayash22-cpu/TaskFlow.git

Go to backend:
cd TaskFlow/task-management-api

Create virtual environment:
python -m venv venv

Activate virtual environment:
Windows
venv\Scripts\activate

Install dependencies:
pip install -r requirements.txt

Run backend:
uvicorn app.main:app --reload

Backend will run at:
http://127.0.0.1:8000

Frontend Setup
Go to frontend:
cd TaskFlow/task-management-frontend

Install dependencies:
npm install

Run frontend:
npm run dev

Frontend will run at:
http://localhost:5173

Database
The project uses SQLite with SQLAlchemy ORM.
The database stores:
- User information
- Task information
- User-task relationship
- Task completion status
Validation and Error Handling
The application validates user input before processing requests.
Examples include:
- Required task title
- Valid email address
- Authentication validation
- Invalid login handling
- Unauthorized access handling
- Task not found handling
- API error responses
Deployment
The project is deployed using Render.
Frontend
https://taskflow-10g1.onrender.com
Backend
https://taskflow-api-ty4q.onrender.com
API Documentation
https://taskflow-api-ty4q.onrender.com/docs
Future Enhancements
- Task due dates
- Task priorities
- Task categories
- User profile management
- Email notifications
- PostgreSQL database
- Admin dashboard
- Task pagination
- Advanced filtering
Screenshots
Screenshots of the following modules are included in the project documentation:
- Registration
- Login
- Dashboard
- Add Task
- Edit Task
- Completed Task
- Search Task
- Swagger API Documentation
- Live Deployment
Conclusion
TaskFlow demonstrates a complete full-stack Task Management System using React.js and FastAPI. The application implements JWT authentication, CRUD operations, input validation, error handling, REST APIs and deployment.
The project provides a simple and user-friendly platform for managing personal tasks securely.
Author
Yash Jobanputra
MSc ICT
Veer Narmad South Gujarat University (VNSGU)
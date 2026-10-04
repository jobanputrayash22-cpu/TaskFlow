from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine
from . import models
from .routers import auth, tasks

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Task Management API",
    description="REST API for managing tasks with JWT authentication",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://taskflow-10g1.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(tasks.router)


@app.get("/")
def home():
    return {
        "message": "Task Management API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }
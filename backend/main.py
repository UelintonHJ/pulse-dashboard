from fastapi import FastAPI

from app.database.database import engine, Base

from app.models.user import User
from app.models.favorite import Favorite
from app.models.search_history import SearchHistory

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Pulse API",
    description="Modern dashboard API for tech trends and AI insights",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Pulse API is running"
    }
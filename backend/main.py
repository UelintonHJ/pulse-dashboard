from fastapi import FastAPI
from app.database.database import engine, Base
from app.models.user import User
from app.models.favorite import Favorite
from app.models.search_history import SearchHistory
from app.routes.auth import router as auth_router
from app.routes.protected import router as protected_router
from app.routes.news import router as news_router
from app.routes.github import router as github_router
from app.routes.jobs import router as jobs_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Pulse API",
    description="Modern dashboard API for tech trends and AI insights",
    version="1.0.0"
)

app.include_router(auth_router)
app.include_router(protected_router)
app.include_router(news_router)
app.include_router(github_router)
app.include_router(jobs_router)

@app.get("/")
def root():
    return {
        "message": "Pulse API is running"
    }
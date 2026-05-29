from fastapi import APIRouter, HTTPException
from app.services.github_service import fetch_github_data

router = APIRouter()


@router.get("/github/{username}")
async def get_github(username: str):

    data = await fetch_github_data(username)

    if not data:
        raise HTTPException(
            status_code=404,
            detail="GitHub user not found"
        )
    
    return data
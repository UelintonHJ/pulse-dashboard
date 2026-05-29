from fastapi import APIRouter, Depends
from app.auth.dependencies import get_current_user

router = APIRouter()

@router.get("/protected")
def protected(user = Depends(get_current_user)):
    return {
        "message": "You are authenticated",
        "user": user
    }
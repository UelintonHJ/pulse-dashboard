from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import SessionLocal
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin, Token
from app.auth.auth import hash_password, verify_password
from app.auth.jwt_handler import create_access_token

router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    
    user_exists = db.query(User).filter(User.email == user.email).first()
    
    if user_exists:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created successfully"}


@router.post("/login", response_model=Token)
def login(user: UserLogin, db: Session = Depends(get_db)):

    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    if not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    token = create_access_token({"sub": str(db_user.id)})

    return {
        "access_token": token,
        "token_type": "bearer"
    }
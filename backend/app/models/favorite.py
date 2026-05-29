from sqlalchemy import Column, Integer, String, ForeignKey
from app.database.database import Base

class Favorite(Base):
    __tablename__ = "favorites"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))

    type = Column(String, nullable=False)

    content_id = Column(String, nullable=False)

    title = Column(String, nullable=False)
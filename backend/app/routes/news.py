from fastapi import APIRouter, HTTPException
from app.services.news_service import fetch_tech_news

router = APIRouter()


@router.get("/news")
async def get_news():

    news = await fetch_tech_news()

    if not news:
        raise HTTPException(
            status_code=500,
            detail="Failed to fetch news"
        )
    
    return {
        "count": len(news),
        "results": news
    }
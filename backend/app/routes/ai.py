from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.ai_service import summarize_text

router = APIRouter()


class SummarizeRequest(BaseModel):
    title: str
    content: str


@router.post("/summarize")
async def summarize(data: SummarizeRequest):

    summary = await summarize_text(data.title, data.content)

    if not summary:
        raise HTTPException(
            status_code=500,
            detail="Failed to generate summary"
        )
    
    return {
        "summary": summary
    }
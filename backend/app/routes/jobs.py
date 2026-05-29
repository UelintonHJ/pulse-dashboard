from fastapi import APIRouter, HTTPException, Query
from app.services.jobs_service import fetch_jobs

router = APIRouter()


@router.get("/jobs")
async def get_jobs(category: str = Query(None)):

    jobs = await fetch_jobs(category)

    if jobs is None:
        raise HTTPException(
            status_code=500,
            detail="Failed to fetch jobs"
        )
    
    return {
        "count": len(jobs),
        "results": jobs
    }
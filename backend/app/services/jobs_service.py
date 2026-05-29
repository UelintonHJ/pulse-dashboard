import httpx

REMOTIVE_URL = "https://remotive.com/api/remote-jobs"


async def fetch_jobs(category: str = None):

    params = {}

    if category:
        params["search"] = category

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(REMOTIVE_URL, params=params)

        response.raise_for_status()

        data = response.json()

        jobs = data.get("jobs", [])

        cleaned_jobs = [
            {
                "id": job.get("id"),
                "title": job.get("title"),
                "company": job.get("company_name"),
                "location": job.get("candidate_required_location"),
                "type": job.get("job_type"),
                "category": job.get("category"),
                "url": job.get("url"),
                "publication_date": job.get("publication_date")
            }
            for job in jobs
        ]

        return cleaned_jobs
    
    except Exception as e:
        print("JOBS API ERROR:", e)
        return []
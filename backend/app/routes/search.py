from fastapi import APIRouter

router = APIRouter()

@router.get("/search")
def search(q: str):

    return {
        "news": [
            {
                "title": f"{q.title} 3.15 released"
            },
            {
                "title": f"New {q.title()} framework announced"
            }
        ],

        "jobs": [
            {
                "title": f"{q.title()} Developer"
            },
            {
                "title": f"Junior {q.title()} Engineer"
            }
        ],

        "technologies": [
            {
                "name": "FastAPI"
            },
            {
                "name": "React"
            }
        ]
    }
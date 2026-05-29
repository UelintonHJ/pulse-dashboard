import os
import httpx

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

NEWS_URL = "https://newsapi.org/v2/top-headlines"


async def fetch_tech_news():

    params = {
        "category": "technology",
        "language": "en",
        "pageSize": 10,
        "apiKey": NEWS_API_KEY
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(NEWS_URL, params=params)

            response.raise_for_status()

            data = response.json()

            articles = data.get("articles", [])

            cleaned = [
                {
                    "title": a.get("title"),
                    "description": a.get("description"),
                    "url": a.get("url"),
                    "source": a.get("source", {}).get("name"),
                    "publishedAt": a.get("publishedAt"),
                    "image": a.get("urlToImage")
                }
                for a in articles
            ]

            return cleaned
        
    except Exception as e:
        print("NEWS API ERROR:", e)
        return []
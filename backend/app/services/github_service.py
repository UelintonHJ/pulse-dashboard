import httpx
from collections import Counter

GITHUB_URL = "https://api.github.com"

async def fetch_github_data(username: str):

    async with httpx.AsyncClient() as client:

        user_resp = await client.get(f"{GITHUB_URL}/users/{username}")

        if user_resp.status_code != 200:
            return None
    
        user_data = user_resp.json()

        repos_resp = await client.get(f"{GITHUB_URL}/users/{username}/repos")
        repos = repos_resp.json()

        total_stars = sum(repo.get("stargazers_count", 0)for repo in repos)

        languages = [repo.get("language") for repo in repos if repo.get("language")]
        language_count = Counter(languages)

        top_languages = language_count.most_common(5)

        simplified_repos = [
            {
                "name": r.get("name"),
                "stars": r.get("stargazers_count"),
                "language": r.get("language"),
                "url": r.get("html_ulr")
            }
            for r in repos[:10]
        ]

        return {
            "users": {
                "name": user_data.get("name"),
                "login": user_data.get("login"),
                "avatar": user_data.get("avatar_url"),
                "bio": user_data.get("bio"),
                "followers": user_data.get("followers"),
                "following": user_data.get("following"),
                "public_repos": user_data.get("public_repos")
            },
            "stats": {
                "total_stars": total_stars,
                "top_languages": top_languages
            },
            "repositories": simplified_repos
        }
import os
import httpx

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

print("API KEY:", OPENROUTER_API_KEY)

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"


async def summarize_text(title: str, content: str):

    prompt = f"""
    You are a helpful assistant that summarizes tech news.

    Summarize the follwing news in a clear, short and simple way:

    Title: {title}

    Content: {content}

    Return only the summary.
    """

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost",
        "X-Title": "Pulse Dashboard"
    }

    payload = {
        "model": "openai/gpt-4o-mini",
        "messages": [
            {"role": "user", "content": prompt}
        ]
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                OPENROUTER_URL,
                headers=headers,
                json=payload
            )

        response.raise_for_status()

        data = response.json()

        return data["choices"][0]["message"]["content"]
    
    except Exception as e:
        print("AI ERROR:", e)
        return None
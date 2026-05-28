from fastapi import FastAPI

app = FastAPI(
    title="Pulse API",
    description="Modern dashboard API for tech trends and AI insights",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Pulse API is running"
    }
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Optional
import json

app = FastAPI()

# Load the JSON data
with open("data.json", "r") as f:
    posts = json.load(f)

class Comment(BaseModel):
    id: int
    parent_id: Optional[int]
    display_name: str
    text: str
    created_at: str

class Post(BaseModel):
    post_url: str
    title: str
    created_at: str
    num_hugs: int
    patient_description: str
    assessment: str
    question: str
    comments: Dict[str, Comment]

@app.get("/")
async def root():
    return {"message": "Welcome to the MDandMe API"}

@app.get("/posts")
async def get_posts(skip: int = 0, limit: int = 10):
    return posts[skip : skip + limit]

@app.post("/posts/{post_url}/hug")
async def hug_post(post_url: str):
    for post in posts:
        if post["post_url"] == post_url:
            post["num_hugs"] += 1
            return {"message": "Hug added successfully"}
    raise HTTPException(status_code=404, detail="Post not found")

@app.post("/posts/{post_url}/comment")
async def add_comment(post_url: str, comment: Comment):
    for post in posts:
        if post["post_url"] == post_url:
            new_comment_id = str(max(map(int, post["comments"].keys())) + 1)
            post["comments"][new_comment_id] = comment.dict()
            return {"message": "Comment added successfully"}
    raise HTTPException(status_code=404, detail="Post not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
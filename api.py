import requests
from fastapi import FastAIP

app = FastAPI()

@app.get("/")
def read_root(movie_id, slug_name):
     return {"Hello":"World"}


headers = {
    'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
    'x-nextjs-data': '1',
    'Referer': 'https://itv.uz/',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'movieId': movie_id,
    'slug': slug_name,
}

response = requests.get(f'https://itv.uz/_next/data/1.19.1/uz/detail/{movie_id}/{slug_name}json', params=params, headers=headers)

if response.status_code != 200:
    return{
        "ok":False,
        "massage":"apida xatolik ro'y berdi",
        'status_code':response.status_code
    }

return response.json()
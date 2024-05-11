import instance from "./index";

export async function getCardItems(uel) {
  let response = await instance.get(uel);
  return response;
}

export async function getModuls() {
  let response = await instance.get("/content");
  return response;
}

export async function getMovie(id, slug) {
  const response = await instance.get(
    `https://itv.uz/_next/data/1.19.1/uz/detail/${id}/${slug}.json`,
    {
      params: {
        movieId: id,
        slug: slug,
      },
      headers: {
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.9,uz;q=0.8,ru;q=0.7",
        Connection: "keep-alive",
        Cookie:
          "_fbp=fb.1.1711589005524.2031661473; _ym_uid=1711589006819273819; _ym_d=1711589006; G_ENABLED_IDPS=google; _gid=GA1.2.324637310.1713200820; _ym_isad=2; _ym_visorc=w; _gat=1; _ga=GA1.1.1343955236.1711589005; _ga_5QKE0E8RD9=GS1.1.1713266600.26.1.1713269183.0.0.0",
        "If-None-Match": '"1976q5qn2w6jbv"',
        Referer: "https://itv.uz/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        "sec-ch-ua":
          '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "x-nextjs-data": "1",
      },
    }
  );
  return response;
}

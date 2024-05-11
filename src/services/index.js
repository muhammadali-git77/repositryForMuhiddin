import axios from "axios";

const instance = axios.create({
  baseURL: "https://cdn.seezntv.astudio.uz/api/v1",
  timeout: 3000,
});
// fetch(
//   "https://cdn.seezntv.astudio.uz/api/v1/content/sorting/?content_type=seezn%20content",
//   {
//     headers: {
//       accept: "application/json, text/plain, */*",
//       "accept-language": "ru,en;q=0.9,uz;q=0.8",
//       "sec-ch-ua":
//         '"Chromium";v="122", "Not(A:Brand";v="24", "YaBrowser";v="24.4", "Yowser";v="2.5"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"Windows"',
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "cross-site",
//     },
//     referrer: "https://seezntv.uz/",
//     referrerPolicy: "strict-origin-when-cross-origin",
//     body: null,
//     method: "GET",
//     mode: "cors",
//     credentials: "omit",
//   }
// );

export default instance;
// https://cdn.seezntv.astudio.uz/api/v1/content/sorting?content_type=anime

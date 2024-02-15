import axios from "axios";
import { API } from "../helpers/url";
// import Cookies from "js-cookie";

export const configAxios = axios.create({
  baseURL: API,
});

// configAxios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const config = error?.config;

//     if (error?.response?.status === 401 && !config?.sent) {
//       config.sent = true;

//       const tokens = Cookies.get("tokens");
//       const result = await configuretedAxios.post("/api/refresh");
//       if (result?.data.jwtToken) {
//         configuretedAxios.headers = {
//           ...configuretedAxios.headers,
//           Authorization: `Bearer ${tokens}`,
//         };
//       }

//       return axios(configuretedAxios);
//     }
//     return Promise.reject(error);
//   }
// );

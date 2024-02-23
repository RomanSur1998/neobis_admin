import Cookies from "js-cookie";
import { configAxios } from "../config/configAxios";
import axios from "axios";

export const api = {
  authorization: async (data, navigate) => {
    try {
      const response = await configAxios.post("/api/v1/auth/admin-login", data);
      console.log(response, "запрос прошел упешно");
      if (response.status === 200) {
        Cookies.set("accessToken", response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
        navigate("/menu");
      }
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getCategoryList: async () => {
    try {
      const response = await configAxios.get("/api/v1/category/all");
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getMenu: async () => {
    try {
      const response = await configAxios.get(
        "/api/v1/menu/all?number=1&size=5"
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  // getRefresh: async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://neo-cafe.up.railway.app/api/v1/auth/refresh-token",
  //       {
  //         email: "admin@gmail.com",
  //         token: Cookies.get("refreshToken"),
  //       }
  //     );
  //     console.log(response, "responseRefresh");
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};

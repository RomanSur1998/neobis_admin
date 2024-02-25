import Cookies from "js-cookie";
import { configAxios } from "../config/configAxios";

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
  getMenu: async (pageNumber) => {
    try {
      const response = await configAxios.get(
        `/api/v1/menu/all?number=${pageNumber}&size=5`
      );
      return response;
    } catch (error) {
      return error;
    }
  },
  setNewCategory: async (data) => {
    try {
      const response = await configAxios.post("/api/v1/category/add", data);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  deleteCategory: async (data) => {
    try {
      const response = await configAxios.delete(
        "/api/v1/category/delete",
        data
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

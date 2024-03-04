import Cookies from "js-cookie";
import { configAxios } from "../config/configAxios";
import axios, { AxiosHeaders } from "axios";

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
      console.log(response);

      return response;
    } catch (error) {
      return error;
    }
  },
  setNewCategory: async (data) => {
    try {
      const response = await configAxios.post("/api/v1/category/add", data);
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  deleteCategory: async (data) => {
    const newData = {
      name: data,
    };
    try {
      console.log(newData);
      const response = await configAxios.delete(
        `/api/v1/category/delete/${data}`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getStockList: async (data) => {
    try {
      const response = await configAxios.get(
        `/api/v1/warehouse/category/${data}&number=1&size=5`,
        { text: data }
      );
      return response;
    } catch (error) {
      console.log(error, "stock error");
      return error;
    }
  },
  getOutStock: async () => {
    try {
      const response = await configAxios.get(
        "/api/v1/warehouse/out-stock?number=1&size=5"
      );

      return response;
    } catch (error) {
      console.log(error, "out stock");
      return error;
    }
  },

  getBranch: async () => {
    try {
      const response = await configAxios.get(
        "/api/v1/filial/all?number=1&size=5"
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  menuSearch: async (data) => {
    try {
      const response = await configAxios.get(
        `/api/v1/menu/find-by-name/${data}?number=1&size=5`
      );
      console.log(response, "search");
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  stockSearch: async (data) => {
    try {
      const response = await configAxios.get(
        `/api/v1/warehouse/find/${data}?number=1&size=5`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  branchesSearch: async (data) => {
    try {
      const response = await configAxios.get(
        `/api/v1/warehouse/find/${data}?number=1&size=5`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getAllEmployers: async () => {
    try {
      const response = await configAxios.get(
        `/api/v1/stuff/all?number=1&size=5`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  employersSearch: async (data) => {
    try {
      const response = await configAxios.get(
        `/api/v1/stuff/all?number=1&size=5`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

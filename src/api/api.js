import Cookies from "js-cookie";
import { configAxios } from "../config/configAxios";

export const api = {
  authorization: async (data, navigate) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await configAxios.post("/api/v1/auth/admin-login", data);
      if (response.status === 200) {
        Cookies.set("accessToken", response.data.accessToken);
        Cookies.set("refreshToken", response.data.refreshToken, { expires: 1 });
        navigate("/menu");
      }
      return response;
    } catch (error) {
      throw error;
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
  // ! Работа с меню
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
  deleteMenuPostition: async (id) => {
    try {
      const response = await configAxios.delete(`/api/v1/menu?id=${id}`);
      return response;
    } catch (error) {
      console.log(error, "delete menu");
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

  getStockList: async (data, pageNumber) => {
    try {
      const response = await configAxios.get(
        `/api/v1/warehouse/category/${data}?number=${pageNumber}&size=5`,
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
        "/api/v1/warehouse/out-stock?number=1&size=6"
      );

      return response;
    } catch (error) {
      console.log(error, "out stock");
      return error;
    }
  },

  deleteStockProduct: async (data) => {
    try {
      const response = await configAxios.delete(`/api/v1/warehouse/${data}`);
      return response;
    } catch (error) {
      console.log(error, "delete menu");
      return error;
    }
  },

  getBranch: async (page) => {
    try {
      const response = await configAxios.get(
        `/api/v1/filial/all?number=${page}&size=5`
      );
      console.log(response, "get Branch");
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
        `/api/v1/filial/find/${data}?number=1&size=5`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  getAllEmployers: async (page) => {
    try {
      const response = await configAxios.get(
        `/api/v1/stuff/all?number=${page}&size=5`
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
        `/api/v1/stuff/find/${data}?number=1&size=5`
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  setPosition: async (formData) => {
    try {
      const response = await configAxios.post("/api/v1/menu", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  setProduct: async (data) => {
    try {
      const response = await configAxios.post("/api/v1/warehouse", data);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  setBranch: async (formData) => {
    try {
      const response = await configAxios.post("/api/v1/filial/save", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  setEmployer: async (data) => {
    try {
      const response = await configAxios.post("/api/v1/stuff/save", data);
      console.log(response, "STUFF SAVE");
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getFilialName: async () => {
    try {
      const response = await configAxios.get("/api/v1/filial/all-names");
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  deleteFilial: async (id) => {
    try {
      const response = await configAxios.delete(`/api/v1/filial/delete/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  deleteEmployer: async (data) => {
    try {
      const response = await configAxios.delete(`/api/v1/stuff/delete/${data}`);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  editMenuPosition: async (formData, id) => {
    try {
      const response = await configAxios.put(
        `/api/v1/menu/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response, "edit postion");
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  editStockProduct: async (formData, id) => {
    try {
      const response = await configAxios.put(
        `/api/v1/warehouse/update/${id}`,
        formData
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  editFilial: async (formData, id) => {
    try {
      const response = await configAxios.put(
        `/api/v1/filial/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  editEmployer: async (data, id) => {
    try {
      const response = await configAxios.put(
        `/api/v1/stuff/update/${id}`,
        data
      );
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

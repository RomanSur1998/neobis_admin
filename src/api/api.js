import { configAxios } from "../config/configAxios";

export const api = {
  authorization: async (data, navigate) => {
    try {
      const response = await configAxios.post("/api/v1/auth/admin-login", data);
      console.log(response, "запрос прошел упешно");
      if (response.status === 200) {
        navigate("/menu");
      }
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

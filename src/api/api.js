import { configAxios } from "../config/configAxios";

export const api = {
  authariSation: async (data, navigate) => {
    try {
      const response = await configAxios.post("/api/v1/auth/login", data);
      console.log(response, "запрос прошел упешно");
      if (response.status === 200) {
        navigate("/code");
      }
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

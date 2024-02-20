import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ data, navigate }, thunkAPI) => {
    try {
      const response = await api.authorization(data, navigate);
      console.log(response);

      Cookies.set("tokens", JSON.stringify(response.data));
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

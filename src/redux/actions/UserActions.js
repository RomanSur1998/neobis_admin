import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ data, navigate }, thunkAPI) => {
    try {
      const response = await api.authorization(data, navigate);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

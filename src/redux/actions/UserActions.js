import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ data, navigate }, thunkAPI) => {
    try {
      const response = await api.authariSation(data, navigate);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

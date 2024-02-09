import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const authUser = createAsyncThunk(
  "user/authUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.authariSation();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

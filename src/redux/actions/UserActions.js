import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const authUser = createAsyncThunk(
  "user/authUser",
  async ({ data, navigate }) => {
    try {
      const response = await api.authorization(data, navigate);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

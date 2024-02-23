import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const getCategoryList = createAsyncThunk(
  "data/getCategoryList",
  async () => {
    try {
      const response = api.getCategoryList();
      return response;
    } catch (error) {
      console.log(error, "error get category");
      return error;
    }
  }
);

export const getMenuList = createAsyncThunk("data/getMenuList", async () => {
  try {
    const response = api.getMenu();
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});

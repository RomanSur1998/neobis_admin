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

export const getMenuList = createAsyncThunk(
  "data/getMenuList",
  async (pageNumber) => {
    try {
      const response = api.getMenu(pageNumber);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const setNewCategory = createAsyncThunk(
  "data/setNewCategory",
  async (data) => {
    try {
      const response = await api.setNewCategory(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "data/deleteCategory",
  async (data) => {
    try {
      console.log(data, "data");
      const response = await api.deleteCategory(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);

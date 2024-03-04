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

export const getStockList = createAsyncThunk(
  "data/getStockList",
  async (data) => {
    try {
      const response = await api.getStockList(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const getOutStock = createAsyncThunk(
  "data/getOutStock",
  async (data) => {
    try {
      const response = await api.getOutStock(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const getBranch = createAsyncThunk("data/getBranch", async () => {
  try {
    const response = await api.getBranch();
    return response;
  } catch (error) {
    return error;
  }
});

export const menuSearch = createAsyncThunk("data/menuSearch", async (data) => {
  try {
    const response = await api.menuSearch(data);
    return response;
  } catch (error) {
    return error;
  }
});
export const stockSearch = createAsyncThunk(
  "data/stockSearch",
  async (data) => {
    try {
      const response = await api.stockSearch(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const branchesSearch = createAsyncThunk(
  "data/branchesSearch",
  async (data) => {
    try {
      const response = await api.branchesSearch(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const getAllEmployers = createAsyncThunk(
  "data/getAllEmployers",
  async () => {
    try {
      const response = await api.getAllEmployers();
      return response;
    } catch (error) {
      console.log(error, "employer all");
      return error;
    }
  }
);
export const employersSearch = createAsyncThunk(
  "data/employersSearch",
  async (data) => {
    try {
      const response = await api.employersSearch(data);
      return response;
    } catch (error) {
      return error;
    }
  }
);

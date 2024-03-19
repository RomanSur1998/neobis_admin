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

export const getStockList = createAsyncThunk(
  "data/getStockList",
  async ({ data, pageNumber }) => {
    try {
      const response = await api.getStockList(data, pageNumber);
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
export const getBranch = createAsyncThunk("data/getBranch", async (page) => {
  try {
    console.log(page, "page");
    const response = await api.getBranch(page);
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
  async (page) => {
    try {
      const response = await api.getAllEmployers(page);
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
export const setPosition = createAsyncThunk(
  "data/setPosition",
  async ({ data, page, dispatch }) => {
    try {
      const response = await api.setPosition(data);
      dispatch(getMenuList(page));
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const setProduct = createAsyncThunk(
  "data/setProduct",
  async ({ data, page, dispatch, filterValue }) => {
    try {
      const response = await api.setProduct(data);
      dispatch(getStockList({ data: filterValue, pageNumber: page }));
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const setBranch = createAsyncThunk(
  "data/setBranch",
  async ({ data, page, dispatch }) => {
    try {
      const response = await api.setBranch(data);
      dispatch(getBranch(page));
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const setEmployer = createAsyncThunk(
  "data/setEmployer",
  async ({ data, page, dispatch }) => {
    try {
      const response = await api.setEmployer(data);
      dispatch(getAllEmployers(page));
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const getFilialName = createAsyncThunk(
  "data/getFilialName",
  async () => {
    try {
      const response = await api.getFilialName();
      return response;
    } catch (error) {
      return error;
    }
  }
);

// ! DELETE
export const deleteMenuPostition = createAsyncThunk(
  "data/deleteMenuPostition",
  async (id) => {
    try {
      const response = api.deleteMenuPostition(id);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const deleteFilial = createAsyncThunk(
  "data/deleteFilial",
  async (id) => {
    try {
      const response = api.deleteFilial(id);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const deleteEmployer = createAsyncThunk(
  "data/deleteEmployer",
  async (data) => {
    try {
      const response = api.deleteEmployer(data);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const deleteStockProduct = createAsyncThunk(
  "data/deleteMenuPostition",
  async (data) => {
    try {
      const response = api.deleteStockProduct(data);
      return response;
    } catch (error) {
      console.log(error);
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

// ! DELETE

// ? EDIT
export const editMenuPosition = createAsyncThunk(
  "data/editMenuPosition",
  async ({ data, id, page, dispatch }) => {
    try {
      console.log(data, "data");
      const response = await api.editMenuPosition(data, id);
      dispatch(getMenuList(page));
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const editStockProduct = createAsyncThunk(
  "data/editStockProduct",
  async ({ data, id }) => {
    try {
      console.log(data, "data");
      const response = await api.editStockProduct(data, id);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const editFilial = createAsyncThunk(
  "data/editFilial",
  async ({ data, id, page, dispatch }) => {
    try {
      console.log(data, "data");
      const response = await api.editFilial(data, id);
      dispatch(getBranch(page));
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const editEmployer = createAsyncThunk(
  "data/editEmployer",
  async ({ data, id, page, dispatch }) => {
    try {
      console.log(data, "data");
      const response = await api.editEmployer(data, id);
      dispatch(getAllEmployers(page));
      return response;
    } catch (error) {
      return error;
    }
  }
);
// ? EDIT

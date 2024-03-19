import { createSlice } from "@reduxjs/toolkit";
import {
  branchesSearch,
  deleteCategory,
  deleteEmployer,
  deleteFilial,
  deleteMenuPostition,
  editEmployer,
  editFilial,
  editMenuPosition,
  editStockProduct,
  employersSearch,
  getAllEmployers,
  getBranch,
  getCategoryList,
  getFilialName,
  getMenuList,
  getOutStock,
  getStockList,
  menuSearch,
  setBranch,
  setEmployer,
  setNewCategory,
  setPosition,
  setProduct,
  stockSearch,
} from "../actions/DataActions";

const initialState = {
  search: "",
  status: false,
  route: "/menu",
  currentModal: null,
  modalProps: null,
  deleteType: "",
  modalTitle: "",
  isShowPopUp: false,
  category: ["Загрузка..."],
  filialName: [],
  tableDataList: null,
  count: null,
  totalPageCount: null,
  pageNumber: 1,
  filter: [
    { name: "Готовая продукция", active: true },
    { name: "Сырье", active: false },
    { name: "Заканчивающиеся продукты", end: true, active: false },
  ],
  filterValue: "Готовая продукция",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setRoute(state, action) {
      state.route = action.payload;
    },
    setCurrentModal(state, action) {
      state.currentModal = action.payload;
    },
    setIsShowPopUp(state, action) {
      state.isShowPopUp = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    setProps(state, action) {
      state.modalProps = action.payload;
    },
    setFilter(state, action) {
      state.filter = state.filter.map((elem) => {
        if (elem.name === action.payload) {
          return { ...elem, active: !elem.active };
        } else {
          return { ...elem, active: false };
        }
      });
    },
    setFilterValue(state, action) {
      state.filterValue = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setTableDataList(state, action) {
      state.tableDataList = [...state.tableDataList, ...action.payload];
    },
    setModalTitle(state, action) {
      state.modalTitle = action.payload;
    },
    setDeleteType(state, action) {
      state.deleteType = action.payload;
    },
    // deleteMenu(state, action) {
    //   state.tableDataList = state.filter((elem) => {
    //     if (elem.id !== action.payload) {
    //       return elem;
    //     }
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
      state.category = action.payload.data;
    });
    builder.addCase(getMenuList.fulfilled, (state, action) => {
      // console.log(action.payload, "payload");
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(deleteMenuPostition.fulfilled, (state, action) => {
      console.log(action.payload, "payload");
      state.currentModal = null;
    });
    builder.addCase(setNewCategory.pending, (state, action) => {
      state.status = true;
    });
    builder.addCase(setNewCategory.fulfilled, (state, action) => {
      state.status = false;
      state.currentModal = null;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(getStockList.fulfilled, (state, action) => {
      console.log(action.payload, "action payload");
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(getBranch.fulfilled, (state, action) => {
      console.log(action.payload, "данные о филиалах");
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(getOutStock.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(menuSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(stockSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(branchesSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(getAllEmployers.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(employersSearch.fulfilled, (state, action) => {
      state.tableDataList = action.payload.data.responses;
      state.totalPageCount = action.payload.data.allCount;
    });
    builder.addCase(setPosition.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(setProduct.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(setBranch.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(setEmployer.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(getFilialName.fulfilled, (state, action) => {
      state.filialName = action.payload.data;
    });
    builder.addCase(deleteEmployer.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(deleteFilial.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(editEmployer.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(editStockProduct.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(editMenuPosition.fulfilled, (state, action) => {
      state.currentModal = null;
    });
    builder.addCase(editFilial.fulfilled, (state, action) => {
      state.currentModal = null;
    });
  },
});

export const {
  setRoute,
  setCurrentModal,
  setIsShowPopUp,
  setCategory,
  setPageNumber,
  setProps,
  setFilter,
  setFilterValue,
  setSearch,
  setTableDataList,
  setModalTitle,
  setDeleteType,
  // deleteMenu,
} = dataSlice.actions;
export default dataSlice.reducer;

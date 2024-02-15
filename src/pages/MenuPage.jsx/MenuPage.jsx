import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { menuBody, menuHeader } from "../../helpers/table/tableHeaders";
import DropDown from "../../components/DropDown/DropDown";
import { useDispatch } from "react-redux";
import { setCurrentModal } from "../../redux/slices/DataSlice";

const MenuPage = () => {
  const dispatch = useDispatch();
  function openModal() {
    dispatch(setCurrentModal("newCategory"));
  }
  return (
    <>
      {/* <DropDown /> */}
      <MainLayout>
        {/* <button onClick={openModal}>modal</button> */}
        <Table headerList={menuHeader} bodyList={menuBody} />
      </MainLayout>
    </>
  );
};

export default MenuPage;

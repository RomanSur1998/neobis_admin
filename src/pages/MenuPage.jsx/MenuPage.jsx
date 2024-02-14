import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { menuBody, menuHeader } from "../../helpers/table/tableHeaders";
import DropDown from "../../components/DropDown/DropDown";

const MenuPage = () => {
  return (
    <>
      {/* <DropDown /> */}
      <MainLayout>
        <Table headerList={menuHeader} bodyList={menuBody} />
      </MainLayout>
    </>
  );
};

export default MenuPage;

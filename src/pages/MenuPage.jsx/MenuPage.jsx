import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { menuHeader } from "../../helpers/table/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { getMenuList } from "../../redux/actions/DataActions";
import { changeTableData } from "../../helpers/table/changeTableData";

const MenuPage = () => {
  const { tableDataList, pageNumber } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  console.log(changeTableData.menuTableData(tableDataList), "table data list");

  useEffect(() => {
    dispatch(getMenuList(pageNumber));
  }, [pageNumber]);

  return (
    <>
      <MainLayout>
        <Table
          headerList={menuHeader}
          bodyList={changeTableData.menuTableData(tableDataList)}
        />
      </MainLayout>
    </>
  );
};

export default MenuPage;

import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { menuHeader } from "../../helpers/table/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentModal } from "../../redux/slices/DataSlice";
import { getMenuList } from "../../redux/actions/DataActions";

const MenuPage = () => {
  const { tableDataList, pageNumber } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuList(pageNumber));
  }, [pageNumber]);
  return (
    <>
      <MainLayout>
        <Table headerList={menuHeader} bodyList={tableDataList} />
      </MainLayout>
    </>
  );
};

export default MenuPage;

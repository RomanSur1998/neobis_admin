import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { stockBody, stockHeader } from "../../helpers/table/tableHeaders";
import StockFilter from "../../components/StockFilter/StockFilter";
import { useSelector } from "react-redux";

const StokePage = () => {
  const { tableDataList } = useSelector((state) => state.data);
  return (
    <>
      <MainLayout>
        <StockFilter />
        <Table headerList={stockHeader} bodyList={tableDataList} />
      </MainLayout>
    </>
  );
};

export default StokePage;

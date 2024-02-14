import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { stockBody, stockHeader } from "../../helpers/table/tableHeaders";
import StockFilter from "../../components/StockFilter/StockFilter";

const StokePage = () => {
  return (
    <>
      <MainLayout>
        <StockFilter />
        <Table headerList={stockHeader} bodyList={stockBody} />
      </MainLayout>
    </>
  );
};

export default StokePage;

import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { stockBody, stockHeader } from "../../helpers/table/tableHeaders";
import StockFilter from "../../components/StockFilter/StockFilter";
import { useDispatch, useSelector } from "react-redux";
import { getStockList } from "../../redux/actions/DataActions";

const StokePage = () => {
  const { tableDataList, pageNumber } = useSelector((state) => state.data);
  const dispatch = useDispatch(pageNumber);

  useEffect(() => {
    dispatch(getStockList());
  }, []);

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

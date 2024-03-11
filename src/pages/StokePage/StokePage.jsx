import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { stockHeader } from "../../helpers/table/tableHeaders";
import StockFilter from "../../components/StockFilter/StockFilter";
import { useDispatch, useSelector } from "react-redux";
import { getOutStock, getStockList } from "../../redux/actions/DataActions";
import { changeTableData } from "../../helpers/table/changeTableData";

const StokePage = () => {
  const { tableDataList, pageNumber, filterValue } = useSelector(
    (state) => state.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterValue !== "Заканчивающиеся продукты") {
      dispatch(getStockList({ data: filterValue, pageNumber: pageNumber }));
    } else {
      dispatch(getOutStock());
    }
  }, [filterValue, pageNumber]);

  return (
    <>
      <MainLayout>
        <StockFilter />
        <Table
          headerList={stockHeader}
          bodyList={changeTableData.stockTableData(tableDataList)}
        />
      </MainLayout>
    </>
  );
};

export default StokePage;

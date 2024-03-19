import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { branchHeader } from "../../helpers/table/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { getBranch } from "../../redux/actions/DataActions";
import { changeTableData } from "../../helpers/table/changeTableData";

const BranchPage = () => {
  const dispatch = useDispatch();
  const { tableDataList, pageNumber } = useSelector((state) => state.data);
  console.log(tableDataList, "table data");

  useEffect(() => {
    dispatch(getBranch(pageNumber));
  }, []);

  return (
    <>
      <MainLayout>
        <Table
          headerList={branchHeader}
          bodyList={changeTableData.branchTableData(tableDataList)}
        />
      </MainLayout>
    </>
  );
};

export default BranchPage;

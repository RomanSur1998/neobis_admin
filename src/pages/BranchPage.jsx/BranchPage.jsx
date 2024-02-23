import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { branchBody, branchHeader } from "../../helpers/table/tableHeaders";
import { useSelector } from "react-redux";

const BranchPage = () => {
  const { tableDataList } = useSelector((state) => state.data);
  return (
    <>
      <MainLayout>
        <Table headerList={branchHeader} bodyList={tableDataList} />
      </MainLayout>
    </>
  );
};

export default BranchPage;

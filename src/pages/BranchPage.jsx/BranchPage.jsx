import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { branchBody, branchHeader } from "../../helpers/table/tableHeaders";

const BranchPage = () => {
  return (
    <>
      <MainLayout>
        <Table headerList={branchHeader} bodyList={branchBody} />
      </MainLayout>
    </>
  );
};

export default BranchPage;

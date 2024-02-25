import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { employerBody, employerHeader } from "../../helpers/table/tableHeaders";
import { useSelector } from "react-redux";

const EmployerPage = () => {
  const { tableDataList } = useSelector((state) => state.data);
  return (
    <>
      <MainLayout>
        <Table headerList={employerHeader} bodyList={tableDataList} />
      </MainLayout>
    </>
  );
};

export default EmployerPage;

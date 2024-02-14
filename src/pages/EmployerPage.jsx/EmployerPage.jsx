import React from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { employerBody, employerHeader } from "../../helpers/table/tableHeaders";

const EmployerPage = () => {
  return (
    <>
      <MainLayout>
        <Table headerList={employerHeader} bodyList={employerBody} />
      </MainLayout>
    </>
  );
};

export default EmployerPage;

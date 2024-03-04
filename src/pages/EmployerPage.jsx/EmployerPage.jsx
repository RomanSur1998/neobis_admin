import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { employerBody, employerHeader } from "../../helpers/table/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployers } from "../../redux/actions/DataActions";

const EmployerPage = () => {
  const { tableDataList } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployers());
  }, []);

  return (
    <>
      <MainLayout>
        <Table headerList={employerHeader} bodyList={tableDataList} />
      </MainLayout>
    </>
  );
};

export default EmployerPage;

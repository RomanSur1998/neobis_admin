import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { employerHeader } from "../../helpers/table/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployers } from "../../redux/actions/DataActions";
import { changeTableData } from "../../helpers/table/changeTableData";

const EmployerPage = () => {
  const { tableDataList } = useSelector((state) => state.data);
  console.log(tableDataList, "employer");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployers());
  }, []);

  return (
    <>
      <MainLayout>
        <Table
          headerList={employerHeader}
          bodyList={changeTableData.employerTableData(tableDataList)}
        />
      </MainLayout>
    </>
  );
};

export default EmployerPage;

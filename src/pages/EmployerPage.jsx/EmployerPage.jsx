import React, { useEffect, useRef } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { employerHeader } from "../../helpers/table/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployers } from "../../redux/actions/DataActions";
import { changeTableData } from "../../helpers/table/changeTableData";

const EmployerPage = () => {
  const { tableDataList, pageNumber } = useSelector((state) => state.data);
  const firstRender = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (firstRender.current) {
      dispatch(getAllEmployers(1));
      firstRender.current = false;
    } else {
      dispatch(getAllEmployers(pageNumber));
    }
  }, [pageNumber]);
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

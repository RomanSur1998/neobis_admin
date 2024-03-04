import React, { useEffect } from "react";
import Table from "../../components/Table/Table";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { branchBody, branchHeader } from "../../helpers/table/tableHeaders";
import { useDispatch, useSelector } from "react-redux";
import { getBranch } from "../../redux/actions/DataActions";

const BranchPage = () => {
  const dispatch = useDispatch();
  const { tableDataList } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getBranch());
  }, []);

  return (
    <>
      <MainLayout>
        <Table headerList={branchHeader} bodyList={tableDataList} />
      </MainLayout>
    </>
  );
};

export default BranchPage;

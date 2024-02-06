import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BASE_ROUT_COLLECTION } from "../helpers/routes/routes";
import Cookies from "js-cookie";
import axios from "axios";

const MainRoutes = () => {
  //   useEffect(() => {
  //     Cookies.set("tokens", "");
  //   }, []);

  return (
    <Routes>
      {BASE_ROUT_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem.id} />;
      })}
    </Routes>
  );
};

export default MainRoutes;

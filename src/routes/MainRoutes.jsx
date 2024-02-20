import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { BASE_ROUT_COLLECTION } from "./routes";

const MainRoutes = () => {
  useEffect(() => {
    const tokens = Cookies.get("tokens");
    const paar = JSON.parse(tokens);
    console.log(paar.accessToken);
  }, []);

  return (
    <Routes>
      {BASE_ROUT_COLLECTION.map((elem) => {
        return <Route path={elem.link} element={elem.element} key={elem.id} />;
      })}
    </Routes>
  );
};

export default MainRoutes;

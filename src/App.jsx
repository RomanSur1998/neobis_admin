import React, { useEffect } from "react";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import MainRoutes from "./routes/MainRoutes";
import MainLayout from "./layouts/MainLayout/MainLayout";

const App = () => {
  return (
    <div>
      <MainRoutes />
      {/* <MainLayout /> */}
    </div>
  );
};

export default App;

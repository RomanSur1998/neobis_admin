import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Modals from "./components/Modal";

const App = () => {
  return (
    <div>
      <MainRoutes />

      <Modals />
    </div>
  );
};

export default App;

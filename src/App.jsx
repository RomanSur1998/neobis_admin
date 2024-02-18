import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Modals from "./components/Modal";
import { useSelector } from "react-redux";

const App = () => {
  const { currentModal } = useSelector((state) => state.data);
  return (
    <div>
      <MainRoutes />
      {currentModal ? <Modals /> : null}
    </div>
  );
};

export default App;

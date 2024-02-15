import { useSelector } from "react-redux";
import NewCategoryModal from "./NewCategoryModal/NewCategoryModal";
import NewPositionModal from "./NewPositionModal/NewPositionModal";

const Modals = () => {
  const { currentModal } = useSelector((state) => state.data);
  const ModalsMap = {
    newCategory: NewCategoryModal,
    newPosition: NewPositionModal,
  };
  return ModalsMap[currentModal]();
};

export default Modals;

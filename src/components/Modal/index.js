import { useSelector } from "react-redux";
import NewCategoryModal from "./NewCategoryModal/NewCategoryModal";
import NewPositionModal from "./NewPositionModal/NewPositionModal";
import DeleteModal from "./DeleteModal/DeleteModal";

const Modals = () => {
  const { currentModal } = useSelector((state) => state.data);
  const ModalsMap = {
    newCategory: NewCategoryModal,
    deleteCategory: DeleteModal,
    newPosition: NewPositionModal,
  };
  return ModalsMap[currentModal]();
};

export default Modals;

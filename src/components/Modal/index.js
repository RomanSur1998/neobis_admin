import { useSelector } from "react-redux";
import NewCategoryModal from "./NewCategoryModal/NewCategoryModal";
import NewPositionModal from "./NewPositionModal/NewPositionModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import EditPositionModal from "./EditPositionModal/EditPositionModal";
import NewProductStockModal from "./NewProductStockModal/NewProductStockModal";
import EditNewProductModal from "./EditNewProductModal/EditNewProductModal";

const Modals = () => {
  const { currentModal } = useSelector((state) => state.data);
  const ModalsMap = {
    newCategory: NewCategoryModal,
    deleteCategory: DeleteModal,
    newPosition: NewPositionModal,
    editPosition: EditPositionModal,
    newProduct: NewProductStockModal,
    editProduct: EditNewProductModal,
  };
  return currentModal ? ModalsMap[currentModal]() : null;
};

export default Modals;

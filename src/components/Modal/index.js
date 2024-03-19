import { useSelector } from "react-redux";
import NewCategoryModal from "./NewCategoryModal/NewCategoryModal";
import NewPositionModal from "./NewPositionModal/NewPositionModal";
import DeleteModal from "./DeleteModal/DeleteModal";
// import EditPositionModal from "./EditPositionModal/EditPositionModal";
import NewProductStockModal from "./NewProductStockModal/NewProductStockModal";
// import EditNewProductModal from "./EditNewProductModal/EditNewProductModal";
import BranchModal from "./BranchModal/BranchModal";
import NewEmployer from "./NewEmployer/NewEmployer";
import ScheduleModal from "./ScheduleModal/ScheduleModal";
import OutModal from "./OutModal/OutModal";

const Modals = () => {
  const { currentModal, modalProps } = useSelector((state) => state.data);

  const ModalsMap = {
    newCategory: NewCategoryModal,
    deleteCategory: DeleteModal,
    newPosition: NewPositionModal,
    newProduct: NewProductStockModal,
    addNewBranch: BranchModal,
    newEmployer: NewEmployer,
    scheduleModal: ScheduleModal,
    outModal: OutModal,
  };

  return currentModal ? ModalsMap[currentModal](modalProps) : null;
};

export default Modals;

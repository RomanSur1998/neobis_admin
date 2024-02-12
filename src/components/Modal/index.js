import { useSelector } from "react-redux";

const Modals = () => {
  const { currentModal, props } = useSelector();
  const ModalsMap = {
    // attention: Attention,
    // phoneNumber: PhoneNumber,
  };
  return ModalsMap[currentModal](props);
};

export default Modals;

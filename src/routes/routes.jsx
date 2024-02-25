import CodeForm from "../components/CodeForm/CodeForm";
import SignInForm from "../components/SignInForm/SignInForm";
import BranchPage from "../pages/BranchPage.jsx/BranchPage";
import EmployerPage from "../pages/EmployerPage.jsx/EmployerPage";
import MenuPage from "../pages/MenuPage.jsx/MenuPage";
import StokePage from "../pages/StokePage/StokePage";

export const BASE_ROUT_COLLECTION = [
  {
    link: "/",
    element: <SignInForm />,
    id: 1,
  },
  {
    link: "/code",
    element: <CodeForm />,
    id: 2,
  },
];
export const PRIVATE_ROUT_COLLECTION = [
  {
    link: "/menu",
    element: <MenuPage />,
    id: 3,
  },
  {
    link: "/stock",
    element: <StokePage />,
    id: 4,
  },
  {
    link: "/branches",
    element: <BranchPage />,
    id: 5,
  },
  {
    link: "/employers",
    element: <EmployerPage />,
    id: 6,
  },
];

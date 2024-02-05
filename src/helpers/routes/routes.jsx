import CodeForm from "../../components/CodeForm/CodeForm";
import SignInForm from "../../components/SignInForm/SignInForm";

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
    link: "/",
    element: <SignInForm />,
    id: 1,
  },
  {
    link: "/code",
    element: <SignInForm />,
    id: 2,
  },
];

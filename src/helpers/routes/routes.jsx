import CodeForm from "../../components/CodeForm/CodeForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import Table from "../../components/Table/Table";

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
  {
    link: "/menu",
    element: <Table />,
    id: 3,
  },
  {
    link: "/stock",
    element: <Table />,
    id: 4,
  },
  {
    link: "/branches",
    element: <Table />,
    id: 5,
  },
  {
    link: "/employers",
    element: <Table />,
    id: 6,
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

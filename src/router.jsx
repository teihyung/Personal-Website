import { useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import Introduction from "./pages/introduction/Introduction";

export default function Router() {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Introduction /> },
      ],
    },
  ]);
}
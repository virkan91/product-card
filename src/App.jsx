import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Food from "./pages/food/Food";
import Clothes from "./pages/clothes/Clothes";
import Electronics from "./pages/electronics/Electronics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Food />,
        },
        {
          path: "clothes",
          element: <Clothes />,
        },
        {
          path: "electronics",
          element: <Electronics />,
        },
      ],
    },
  ]);

  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;

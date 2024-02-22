import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import "./App.scss";
import Layout from "./components/layout/layout";
import Error from "./pages/error/error";
import Login from "./pages/login/login";
import routes from "./routers/routers";
import PathConstants from "./routers/pathConstans";
import ModalWindow from "./components/UI/modalWindow/modalWindow";
import AOS from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "./assets/utils/base";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <ModalWindow />
            <Layout />
          </>
        ),
        errorElement: <Error />,
        children: routes,
      },
      {
        path: PathConstants.LOGIN,
        element: (
          <>
            <ModalWindow />
            <Login />
          </>
        ),
      },
    ],
    { basename: BASE_URL }
  );
  console.log(BASE_URL);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;

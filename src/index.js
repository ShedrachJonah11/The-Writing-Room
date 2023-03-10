import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Login } from "./pages/login/Login";
import { Regsiter } from "./pages/login/Regsiter";
import { DetailsPages } from "./pages/details/DetailsPages";
import { Account } from "./pages/account/Account";
import { Create } from "./components/create/Create";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { Layout, Root } from "./layout/Layout";
import ErrorPage from "./pages/exceptions/error-page";
import Protected from "./utils/Protected";
import { UpdatePost } from "./pages/crud/UpdatePost";
// {
//   path: 'home',
//   element: <Home />,
// },
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "login",
    element: (
      // <Protected>
      <Login />
      // </Protected>
    ),
  },
  {
    path: "register",
    element: (
      <Protected>
        <Regsiter />
      </Protected>
    ),
  },
  {
    path: "details/:id",
    element: <DetailsPages />,
  },
  {
    path: "account",
    element: (
      <Protected>
        <Account />
      </Protected>
    ),
  },
  {
    path: "create",
    element: (
      <Protected>
        <Create />
      </Protected>
    ),
  },
  {
    path: "edit/:id",
    element: (
      <Protected>
        <UpdatePost />
      </Protected>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </div>
    </Provider>
  </React.StrictMode>
);

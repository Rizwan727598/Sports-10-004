import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import UpdateEquipment from "./components/UpdateEquipment";
import ViewDetails from "./components/ViewDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import "./index.css";
import MyEquipmentList from "./components/MyEquipmentList";
import AddEquipment from "./components/AddEquipmentList";
import PrivateRoute from "./components/PrivateRoute";
import AuthProvider from "./Providers/AuthProvider";
import AllSportsEquipment from "./components/AllSportsEquipment";
import ThemeProvider from "./context/ThemeContext"; // Import ThemeProvider

// Define router outside of AppRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "add",
        element: (
          <PrivateRoute>
            <AddEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipment />
          </PrivateRoute>
        ),
      },
      { path: "/all-equipment", element: <AllSportsEquipment /> },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
      },
      { path: "signIn", element: <SignIn /> },
      { path: "signUp", element: <SignUp /> },

      {
        path: "my-equipment",
        element: (
          <PrivateRoute>
            <MyEquipmentList />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

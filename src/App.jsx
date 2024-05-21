import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Hero from "./page/hero";
import Signin from "./page/Signin";
import Editprofile from "./page/Editprofile";
import Dashboard from "./page/Dashboard";
import Admin from "./page/Admin";
import AdminDashboard from "./page/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/editprofile",
    element: <Editprofile />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
]);

function App() {
  const [count, setCount] = useState(0);
  return <RouterProvider router={router} />;
}

export default App;

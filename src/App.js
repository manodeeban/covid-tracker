import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import "./setupMockUser";
import Home from "./Pages/Home";
import "./style.scss";
//import Register from "./Pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

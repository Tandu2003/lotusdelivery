import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Account from "../Pages/Account";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Cart from "../Pages/Cart";
import Products from "../Pages/Products";
import CocoIchibanya from "../Pages/CocoIchibanya";
import Conservo from "../Pages/Conservo";
import MarukameUdon from "../Pages/MarukameUdon";
import Yoshinoya from "../Pages/Yoshinoya";

const RouterApp = () => {
  const routesPublic = [
    { path: "/", element: <Home /> },
    { path: "/account/login", element: <Login /> },
    { path: "/account/register", element: <Register /> },
    { path: "/account", element: <Account /> },
    { path: "/cart", element: <Cart /> },
    { path: "/products", element: <Products /> },
    { path: "/pages/coco-ichibanya", element: <CocoIchibanya /> },
    { path: "/pages/conservo", element: <Conservo /> },
    { path: "/pages/marukame-udon", element: <MarukameUdon /> },
    { path: "/pages/yoshinoya", element: <Yoshinoya /> },
    { path: "*", element: <NotFound /> },
  ];

  return (
    <Routes>
      {routesPublic.map((route, index) => {
        return <Route path={route.path} element={route.element} key={index} />;
      })}
    </Routes>
  );
};

export default RouterApp;

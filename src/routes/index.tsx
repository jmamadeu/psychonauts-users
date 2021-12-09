import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";
import { Favorites } from "../pages/favorites";
import { Home } from "../pages/home";

export const ROUTES = [
  {
    path: "/",
    element: Home,
    name: "Home"
  },
  {
    path: "/favorites",
    element: Favorites,
    name: "Favorites"
  }
];

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {ROUTES?.map(({ path, element: Element }) => (
        <Route key={v4()} path={path} element={<Element />} />
      ))}
    </Routes>
  </BrowserRouter>
);

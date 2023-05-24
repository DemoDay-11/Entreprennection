//Routes.js
import { Route, Routes as RoutesDom } from "react-router-dom"
import Login from "./pages/login/login";

import Menu from "./components/menu/menu";
import Landing from "./pages/landing-page/landing";

const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<Landing />} />
        <Route path="Login" element={<Login />} />
        <Route path="Home" element={<Menu />} />
      </RoutesDom>
  )
}

export default Routes;
//Routes.js
import { Route, Routes as RoutesDom } from "react-router-dom"
import Login from "./pages/login/login";

import Menu from "./components/menu/menu";

const Routes = () => {
  return (
      <RoutesDom>
        <Route index element={<Login />} />
        <Route path="Menu" element={<Menu />} />
      </RoutesDom>
  )
}

export default Routes;
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Map from "../pages/Map";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/">
          <Route path="map" element={<Map />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;

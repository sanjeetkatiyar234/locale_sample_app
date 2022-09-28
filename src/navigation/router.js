import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout/Layout";
import ArcLayerPage from "../pages/ArcLayerPage";
import Home from "../pages/Home";
import Map from "../pages/Map";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="map" element={<Map />} />
      <Route path="arclayer" element={<ArcLayerPage />} />
    </Route>
  )
);

export default router;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "layout/Layout";
import ArcLayerPage from "pages/rideShareDemand/ArcLayerPage";
import Home from "pages/home/Home";
import Map from "pages/originDestination/Map";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="origin-destination" element={<Map />} />
      <Route path="ride-share-demand" element={<ArcLayerPage />} />
    </Route>
  )
);

export default router;

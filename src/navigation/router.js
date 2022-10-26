import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as React from "react";
import Layout from "layout/Layout";
import PageLoader from "layout/PageLoader";

// Lazy-loaded
const Home = React.lazy(() => import('pages/home/Home'));
const MapPage = React.lazy(() => import('pages/originDestination/MapPage'));
const ArcLayerPage = React.lazy(() => import('pages/rideShareDemand/ArcLayerPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={
        <React.Suspense fallback={<PageLoader />}>
          <Home />
        </React.Suspense>
      } />
      <Route path="origin-destination" element={
        <React.Suspense fallback={<PageLoader />}>
          <MapPage />
        </React.Suspense>} />
      <Route path="ride-share-demand" element={
        <React.Suspense fallback={<PageLoader />}>
          <ArcLayerPage />
        </React.Suspense>} />
    </Route>
  )
);

export default router;

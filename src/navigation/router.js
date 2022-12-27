import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import * as React from "react";
import Layout from "layout/Layout";
import PageLoader from "layout/PageLoader";

// Lazy-loaded
const Home = React.lazy(() => import("pages/originDesination1/Home"));
const Dashboard = React.lazy(() => import("pages/dashboard/Dashboard"));
const MapPage = React.lazy(() => import("pages/originDestination/MapPage"));
const ArcLayerPage = React.lazy(() =>
  import("pages/rideShareDemand/ArcLayerPage")
);
const PredictionLayerPage = React.lazy(() =>
  import("pages/predictionLayer/PredictionLayerPage")
);
const FilteredLayerPage = React.lazy(() =>
  import("pages/filteredLayer/FilteredLayerPage")
);
const GeoJsonLayer = React.lazy(() =>
  import("pages/geoJsonLayer/GeoJsonLayer")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <React.Suspense fallback={<PageLoader />}>
            <Dashboard />
          </React.Suspense>
        }
      />
      <Route
        path="origin-destination-v1"
        element={
          <React.Suspense fallback={<PageLoader />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
        path="origin-destination"
        element={
          <React.Suspense fallback={<PageLoader />}>
            <MapPage />
          </React.Suspense>
        }
      />
      <Route
        path="ride-share-demand"
        element={
          <React.Suspense fallback={<PageLoader />}>
            <ArcLayerPage />
          </React.Suspense>
        }
      />
      <Route
        path="prediction-layer"
        element={
          <React.Suspense fallback={<PageLoader />}>
            <PredictionLayerPage />
          </React.Suspense>
        }
      />
      <Route
        path="filtered-layer"
        element={
          <React.Suspense fallback={<PageLoader />}>
            <FilteredLayerPage />
          </React.Suspense>
        }
      />
      <Route
        path="geojson-layer"
        element={
          <React.Suspense fallback={<PageLoader />}>
            <GeoJsonLayer />
          </React.Suspense>
        }
      />
    </Route>
  )
);

export default router;

import React from "react";
import { useSelector } from "react-redux";
import H3HexagonLayerWithSlider from "./H3HexagonLayerWithSlider";
import PageHeader from "./PageHeader";
import OriginDestinationRightSidePanel from "./OriginDestinationRightSidePanel";
import PageLeftSidePanel from "layout/PageLeftSidePanel";
import { h3HexDataSelector } from "./selectors";
import OriginDestinationColorForm from "./OriginDestinationColorForm";
import useInitializeOriginDestination from "./useInitializeOriginDestination";
import PageLoader from "layout/PageLoader";
import Footer from "layout/Footer";
import "./MapPage.css";

const MapPage = () => {
  const sampleData = useSelector(h3HexDataSelector);
  const loading = useSelector((state) => state.app.loading?.global);
  useInitializeOriginDestination();

  if (loading) return <PageLoader />;

  return (
    <div className="mapPageContainer">
      <PageHeader />
      <PageLeftSidePanel>
        <OriginDestinationColorForm />
      </PageLeftSidePanel>
      <H3HexagonLayerWithSlider
        className="mapContent"
        sampleData={sampleData}
      />
      {/* <OriginDestinationRightSidePanel /> */}
      <Footer />
    </div>
  );
};

export default MapPage;

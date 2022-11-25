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

const MapPage = () => {
  const sampleData = useSelector(h3HexDataSelector);
  const loading = useSelector((state) => state.app.loading?.global);
  useInitializeOriginDestination();

  if (loading) return <PageLoader />;

  return (
    <div>
      <PageHeader />
      <PageLeftSidePanel>
        <OriginDestinationColorForm />
      </PageLeftSidePanel>
      <H3HexagonLayerWithSlider sampleData={sampleData} />
      {/* <OriginDestinationRightSidePanel /> */}
    </div>
  );
};

export default MapPage;

import React from "react";
import { useSelector } from "react-redux";
import H3HexagonLayerWithSlider from "./H3HexagonLayerWithSlider";
import PageHeader from "./PageHeader";
import OriginDestinationRightSidePanel from "./OriginDestinationRightSidePanel";
import PageLeftSidePanel from "layout/PageLeftSidePanel";
import { h3SampleDataWithFilterTypeSelector } from "./selectors";
import OriginDestinationColorForm from "./OriginDestinationColorForm";
import useInitializeOriginDestination from "./useInitializeOriginDestination";

const MapPage = () => {
  const sampleData = useSelector(h3SampleDataWithFilterTypeSelector);
  useInitializeOriginDestination();
  return (
    <div>
      <PageHeader />
      <PageLeftSidePanel>
        <OriginDestinationColorForm />
      </PageLeftSidePanel>
      <H3HexagonLayerWithSlider sampleData={sampleData} />
      <OriginDestinationRightSidePanel />
    </div>
  );
};

export default MapPage;

import React, { useEffect } from "react";
import useToast from "hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import H3HexagonLayerWithSlider from "./H3HexagonLayerWithSlider";
import PageHeader from "./PageHeader";
import { fetchH3SampleData } from "store/actions";
import OriginDestinationRightSidePanel from "./OriginDestinationRightSidePanel";
import PageLeftSidePanel from "layout/PageLeftSidePanel";
import { h3SampleDataWithFilterTypeSelector } from "./selectors";
import OriginDestinationColorForm from "./OriginDestinationColorForm";

const MapPage = () => {
  const sampleData = useSelector(h3SampleDataWithFilterTypeSelector);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      ...fetchH3SampleData(),
      statusCodeMap: {
        success: () => toast.success("data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [dispatch]);

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

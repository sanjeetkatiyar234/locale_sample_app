import React, { useEffect } from "react";
import { h3SampleDataWithFilterTypeSelector } from "store/selectors";
import useToast from "hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import H3HexagonLayerWithSlider from "./H3HexagonLayerWithSlider";
import PageHeader from "./PageHeader";
import { fetchH3SampleData } from "store/actions";

const MapPage = () => {
  const sampleData = useSelector(h3SampleDataWithFilterTypeSelector);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!sampleData.length) {
      dispatch({
        ...fetchH3SampleData(),
        statusCodeMap: {
          success: () => toast.success("data loaded"),
        },
      });
    }
  }, [dispatch, sampleData]);

  return (
    <div>
      <PageHeader />
      <H3HexagonLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default MapPage;

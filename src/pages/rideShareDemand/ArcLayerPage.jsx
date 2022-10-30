import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueryHiveData } from "store/actions";
import useToast from "hooks/useToast";
import { queryHiveDataWithFilterTypeSelector } from "store/selectors";
import PageHeader from "./PageHeader";
import ArcLayerWithSlider from "./ArcLayerWithSlider";

const ArcLayerPage = () => {
  const sampleData = useSelector(queryHiveDataWithFilterTypeSelector);
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch({
        ...fetchQueryHiveData(),
        statusCodeMap: {
          success: () => toast.success("data loaded"),
          error: () => toast.error("failed data load"),
        },
      });
  }, [dispatch]);

  return (
    <div>
      <PageHeader />
      <ArcLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default ArcLayerPage;

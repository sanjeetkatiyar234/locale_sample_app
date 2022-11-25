import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueryHiveData } from "store/actions";
import useToast from "hooks/useToast";
import { useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";
import ArcLayerWithSlider from "./ArcLayerWithSlider";
import { fetchH3ToArcLayerData } from "./actions";
import { arcLayerDataSelector } from "./selectors";
import PageLoader from "layout/PageLoader";

const ArcLayerPage = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const sampleData = useSelector((state) =>
    arcLayerDataSelector(state, !!search)
  );
  const loading = useSelector((state) => state.app.loading?.global);

  useEffect(() => {
    const action = search
      ? fetchH3ToArcLayerData(search)
      : fetchQueryHiveData();
    dispatch({
      ...action,
      statusCodeMap: {
        success: () => toast.success("data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [dispatch, search]);
  if (loading) return <PageLoader />;
  return (
    <div>
      <PageHeader />
      <ArcLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default ArcLayerPage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// custom import
import useToast from "hooks/useToast";
import PageLeftSidePanel from "layout/PageLeftSidePanel";
import Footer from "layout/Footer";
import PageLoader from "layout/PageLoader";
import { fetchFilteredLayerData } from "./actions";
import PageHeader from "./PageHeader";
import "./FilteredLayerPage.css";
import CustomH3HexagonLayer from "./CustomH3HexagonLayer";
import { getFilteredLayerDataSelector } from "./selectors";
import FilteredLayerColorForm from "./FilteredLayerColorForm";
import FilteredLayerRightSidePanel from "./FilteredLayerRightSidePanel";

const FilteredLayerPage = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading?.global);
  const data = useSelector(getFilteredLayerDataSelector);

  useEffect(() => {
    dispatch({
      ...fetchFilteredLayerData(),
      statusCodeMap: {
        success: () => toast.success("data loaded"),
        error: () => toast.error("failed data load"),
      },
    });
  }, [dispatch]);

  if (loading) return <PageLoader />;
  return (
    <div className="filteredLayerContainer">
      <PageHeader />
      <PageLeftSidePanel>
        <FilteredLayerColorForm />
      </PageLeftSidePanel>
      <div className="mapContent">
        <CustomH3HexagonLayer data={data} />
      </div>
      <FilteredLayerRightSidePanel />
      <Footer />
    </div>
  );
};

export default FilteredLayerPage;

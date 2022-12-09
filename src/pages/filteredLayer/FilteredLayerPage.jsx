import React, { useEffect, useState } from "react";
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
import TimeRangeSlider from "components/TimeRangeSlider";
import moment from "moment";

const FilteredLayerPage = () => {
  const toast = useToast();
  const [dateRange, setDateRange] = useState();
  // const [dateRange, setDateRange] = useState({
  //   cancel: false,
  //   end: new Date('2022-12-06'),
  //   name: "changed",
  //   selectedData: [],
  //   start: new Date('2022-12-04'),
  //   zoomFactor: -4.633333333333334,
  //   zoomPosition: 0
  // });
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

  const temp = data.map((d) => { 
    return { start_time: moment(d.incident_datetime).format("YYYY-MM-DD"), vehicle_count: d.category_counts[-1]}
  })
  if (loading) return <PageLoader />;
  return (
    <div className="filteredLayerContainer">
      <PageHeader />
      <PageLeftSidePanel>
        <FilteredLayerColorForm />
      </PageLeftSidePanel>
      <div className="mapContent">
        {temp && <TimeRangeSlider
          selectedDateRange={dateRange}
          dataSource={temp}
          setDateRange={setDateRange}
          xName="start_time"
          yName="vehicle_count"
        />}
        <CustomH3HexagonLayer data={data} />
      </div>
      <FilteredLayerRightSidePanel />
      <Footer />
    </div>
  );
};

export default FilteredLayerPage;

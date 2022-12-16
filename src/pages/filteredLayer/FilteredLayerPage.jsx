import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// custom import
import useToast from "hooks/useToast";
import PageLeftSidePanel from "layout/PageLeftSidePanel";
import Footer from "layout/Footer";
import PageLoader from "layout/PageLoader";
import { fetchFilteredLayerData } from "./actions";
import PageHeader from "./PageHeader";
import "./FilteredLayerPage.css";
import CustomH3HexagonLayer from "./CustomH3HexagonLayer";
import { getCountkeySelector, getFilteredLayerDataSelector } from "./selectors";
import FilteredLayerColorForm from "./FilteredLayerColorForm";
import FilteredLayerRightSidePanel from "./FilteredLayerRightSidePanel";
import TimeRangeSlider from "components/TimeRangeSlider";

const normalizeRequest = (formValue = {}, viewFilterValue) => {
  const start_time =
    viewFilterValue === "daily"
      ? formValue.daily_start_date?.format("YYYY-MM-DD")
      : formValue.start_date?.format("YYYY-MM-DD");
  const end_time =
    viewFilterValue === "daily"
      ? formValue.daily_start_date?.format("YYYY-MM-DD")
      : formValue.end_date?.format("YYYY-MM-DD");
  return {
    start_time: start_time,
    end_time: end_time,
    view_type: viewFilterValue,
  };
};

const FilteredLayerPage = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const loading = useSelector((state) => state.app.loading?.global);
  const [dateRange, setDateRange] = useState({});
  const { start, end } = dateRange;
  const { primaryColor, secondaryColor } =
    useSelector((state) => state.pages.filteredLayer.selectedColor) || {};
  const data = useSelector(getFilteredLayerDataSelector);
  const countKey = useSelector(getCountkeySelector);
  const viewFilterValue = useSelector(
    (state) => state.pages.filteredLayer.viewFilter.value
  );
  const formValue = useSelector(
    (state) => state.pages.filteredLayer.rightSidePanelForm.value
  );

  useEffect(() => {
    if (formValue && viewFilterValue) {
      dispatch({
        ...fetchFilteredLayerData({
          ...normalizeRequest(formValue, viewFilterValue),
        }),
        statusCodeMap: {
          success: () => toast.success("data loaded"),
          error: () => toast.error("failed data load"),
        },
      });
    }
  }, [
    dispatch,
    viewFilterValue,
    formValue.daily_start_date,
    formValue.start_date,
    formValue.end_date,
  ]);

  const dataSource = useMemo(
    () =>
      data.map((d) => ({
        ...d,
        start_time: d?.incident_datetime,
        vehicle_count: d?.category_counts[+countKey] || 0,
      })),
    [data, countKey]
  );

  const filterData = useMemo(() => {
    const filterData = dataSource.filter(
      (d) =>
        moment(d.start_time).isSameOrAfter(start) &&
        moment(d.start_time).isSameOrBefore(end)
    );
    const dataMidlength = parseInt(filterData.length / 2);
    return filterData.map((data, index) => ({
      ...data,
      color: index <= dataMidlength ? primaryColor : secondaryColor,
    }));
  }, [dataSource, start, end, primaryColor, secondaryColor]);

  if (loading) return <PageLoader />;

  return (
    <div className="filteredLayerContainer">
      <PageHeader />
      <PageLeftSidePanel>
        <FilteredLayerColorForm />
      </PageLeftSidePanel>
      <div className="mapContent">
        <TimeRangeSlider
          selectedDateRange={dateRange}
          dataSource={dataSource}
          setDateRange={setDateRange}
          xName="start_time"
          yName="vehicle_count"
        />
        <CustomH3HexagonLayer data={filterData} />
      </div>
      <FilteredLayerRightSidePanel />
      <Footer />
    </div>
  );
};

export default FilteredLayerPage;
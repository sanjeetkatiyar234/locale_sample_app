import React, { useState } from "react";
import PageLoader from "layout/PageLoader";
import Footer from "layout/Footer";
import TimeRangeSlider from "components/TimeRangeSlider";
import PageHeader from "./PageHeader";
import CustomGeoJsonLayer from "./CustomGeoJsonLayer";
import "./GeoJsonLayer.css";

import GeoJsondata from "./data.json";
import { getTimeRangeForSlider, filtergeoJsonData } from "./utils";

const firstGeodata = GeoJsondata.features.shift();
const geoJsonFeatures = GeoJsondata.features;
const GeoJsonLayer = () => {
  const [dateRange, setDateRange] = useState({});

  const dataSourceForTimeRangeSlider = getTimeRangeForSlider(firstGeodata);
  const filterData = filtergeoJsonData(
    geoJsonFeatures,
    dataSourceForTimeRangeSlider,
    dateRange
  );
  // console.log("firstGeodata", firstGeodata);
  // console.log("GeoJsondata", GeoJsondata.features);
  console.log("filterData", filterData);
  return (
    <div className="geo-json-layer">
      <PageHeader />
      <div style={{ position: "relative", flex: 1 }}>
        <TimeRangeSlider
          filterTypeValue={"daily"}
          selectedDateRange={dateRange}
          dataSource={dataSourceForTimeRangeSlider}
          setDateRange={setDateRange}
          xName="start_time"
          intervalType="Minutes"
          interval={15}
        />
        <CustomGeoJsonLayer data={filterData} />
      </div>
      <Footer />
    </div>
  );
};

export default GeoJsonLayer;
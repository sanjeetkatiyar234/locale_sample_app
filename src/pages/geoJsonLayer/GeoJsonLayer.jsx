import React from "react";
import PageLoader from "layout/PageLoader";
import Footer from "layout/Footer";
import PageHeader from "./PageHeader";
import CustomGeoJsonLayer from "./CustomGeoJsonLayer";
import "./GeoJsonLayer.css";

const GeoJsonLayer = () => {
  return (
    <div className="geo-json-layer">
      <PageHeader />
      <CustomGeoJsonLayer />
      <Footer />
    </div>
  );
};

export default GeoJsonLayer;

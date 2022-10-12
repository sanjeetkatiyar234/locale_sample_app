import React from "react";
import H3HexagonLayerWithSlider from "./H3HexagonLayerWithSlider";
import PageHeader from "./PageHeader";
import { useH3CsvData } from "../hooks/useH3CsvData";

const MapPage = () => {
  const { sampleData } = useH3CsvData();

  return (
    <div>
      <PageHeader />
      <H3HexagonLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default MapPage;

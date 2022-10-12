import React from "react";
import PageHeader from "./PageHeader";
import HexagonalLayerWithSlider from "./HexagonalLayerWithSlider";
import { useCsvData } from "../hooks/useCsvData";

const Home = () => {
  const { sampleData } = useCsvData();

  return (
    <div>
      <PageHeader />
      <HexagonalLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default Home;

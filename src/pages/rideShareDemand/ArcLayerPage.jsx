import React from "react";
import PageHeader from "./PageHeader";
import ArcLayerWithSlider from "./ArcLayerWithSlider";
import { useCsvData } from "../hooks/useCsvData";

const ArcLayerPage = () => {
  const { sampleData } = useCsvData();

  return (
    <div>
      <PageHeader />
      <ArcLayerWithSlider sampleData={sampleData} />
    </div>
  );
};

export default ArcLayerPage;

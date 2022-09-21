import React, { useEffect, useState } from "react";
import { csv } from "d3";

const useCsvData = () => {
  const [sampleData, setSampleData] = useState([]);
  useEffect(() => {
    csv("/data/query-hive.csv", (row, id) => ({
      id,
      ...row,
      startPosition: [+row["first_lon"], +row["first_lat"]],
      endPosition: [+row["end_lon"], +row["end_lat"]],
    }))
      .then((rows) =>
        rows.filter(
          (d) =>
            d.startPosition[0] != null &&
            d.startPosition[1] != null &&
            d.endPosition[0] != null &&
            d.endPosition[1] != null
        )
      )
      .then(setSampleData);
  }, []);

  return { sampleData };
};

export default useCsvData;

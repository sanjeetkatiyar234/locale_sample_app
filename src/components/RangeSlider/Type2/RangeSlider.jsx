import React from "react";
import {
  LineSeries,
  DateTime,
  Inject,
  RangeNavigatorComponent,
  RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective,
  RangeTooltip,
} from "@syncfusion/ej2-react-charts";

const chartLoad = () => {
  let data = [];
  let i;
  for (i = 0; i < 150; i++) {
    data.push({
      x: Math.pow(10, i * 0.1),
      y: Math.floor(Math.random() * (80 - 30 + 1)) + 30,
    });
  }
  return data;
};

const RangeSlider = ({ setDateRange }) => {
  return (
    <RangeNavigatorComponent
      id="charts"
      valueType="DateTime"
      value={[new Date("2022-01-01"), new Date("2022-02-01")]}
      tooltip={{ enable: true, displayMode: "Always" }}
      changed={(value) => {
        setDateRange(value);
      }}
      minimum={new Date("2022-01-01")}
      maximum={new Date("2022-02-01")}
      name="timeSelector"
      allowIntervalData
    >
      <Inject services={[LineSeries, DateTime, RangeTooltip]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective
          dataSource={[]}
          xName="x"
          yName="y"
          type="Line"
          width={2}
        />
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>
  );
};

export default RangeSlider;

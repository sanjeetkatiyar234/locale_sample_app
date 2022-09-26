import React, { useState } from "react";
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
  for (i = 0; i < 100; i++) {
    data.push({
      x: Math.pow(10, i * 0.1),
      y: Math.floor(Math.random() * (80 - 30 + 1)) + 30,
    });
  }
  return data;
};

const RangeSlider = () => {
  return (
    <RangeNavigatorComponent
      id="charts"
      valueType="DateTime"
      labelFormat="MMM-yy"
      value={[new Date("2017-09-01"), new Date("2018-02-01")]}
      tooltip={{ enable: true }}
      onPropertyChanged={(value) => {
        console.log(value);
      }}
      allowIntervalData
    >
      <Inject services={[LineSeries, DateTime, RangeTooltip]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective
          dataSource={chartLoad()}
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

import {
  DateTime,
  Inject, PeriodSelector, RangeNavigatorComponent,
  RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective,
  RangeTooltip
} from "@syncfusion/ej2-react-charts";
import React from "react";

const RangeSlider = ({ dataSource = [], setDateRange }) => {
  const periodSelectorSettings = {
    position: "Top",
    periods: [
      { text: "10Min", interval: 10, intervalType: "Minutes" },
      { text: "30Min", interval: 30, intervalType: "Minutes" },
      { text: "1Hr", interval: 1, intervalType: "Hours" },
      { text: "6Hr", interval: 6, intervalType: "Hours" },
      { text: "12Hr", interval: 12, intervalType: "Hours" },
      { text: "1D", interval: 1, intervalType: "Days" },
    ],
  };

  return (
    <RangeNavigatorComponent
    id="charts"
    valueType="DateTime"
    value={[new Date("2022-01-01"), new Date("2022-02-01")]}
    tooltip={{ enable: true, displayMode: "Always" }}
    changed={(value) => {
      setDateRange(value);
    }}
    allowIntervalData
    periodSelectorSettings={periodSelectorSettings}
    intervalType="Minutes"
    enableRtl={true}
    enableDeferredUpdate={true}
    >
      <Inject services={[DateTime, RangeTooltip, PeriodSelector]} />
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective
          dataSource={dataSource}
          xName="dateTime"
          yName="y"
          type="Line"
          width={2}
        />
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>
  );
};

export default RangeSlider;

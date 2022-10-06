import {
  DateTime,
  Inject,
  LineSeries,
  PeriodSelector,
  RangeNavigatorComponent,
  RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective,
  RangeTooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useSelector } from "react-redux";

const RangeSlider = ({ dataSource = [], setDateRange, xName, yName = "y" }) => {
  const filterTypeValue = useSelector((state) => state.filterType.value);

  const intraDayPeriodSelectorSettings = {
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

  const monthlyPeriodSelectorSettings = {
    position: "Top",
    periods: [
      { text: "1M", interval: 1, intervalType: "Months" },
      { text: "3M", interval: 3, intervalType: "Months" },
      { text: "6M", interval: 6, intervalType: "Months" },
      { text: "1Y", interval: 1, intervalType: "Years" },
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
      periodSelectorSettings={
        filterTypeValue === "intraDay"
          ? intraDayPeriodSelectorSettings
          : monthlyPeriodSelectorSettings
      }
      intervalType={filterTypeValue === "intraDay" ? "Minutes" : "Months"}
      // enableRtl={true}
      enableDeferredUpdate={true}
    >
      <Inject services={[LineSeries, DateTime, RangeTooltip, PeriodSelector]} />
      <RangenavigatorSeriesCollectionDirective>
        {xName && (
          <RangenavigatorSeriesDirective
            dataSource={dataSource}
            xName={xName}
            yName={yName}
            type="Line"
            width={2}
          />
        )}
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>
  );
};

export default RangeSlider;

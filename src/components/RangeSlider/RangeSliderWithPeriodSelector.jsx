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

const RangeSliderWithPeriodSelector = ({
  dataSource = [],
  setDateRange,
  xName,
  yName = "y",
}) => {
  if (!dataSource.length) {
    return null;
  }

  const periodSelectorSettings = {
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
      id="charts1"
      valueType="DateTime"
      // value={[new Date("2022-01-01"), new Date("2022-02-01")]}
      tooltip={{ enable: true, displayMode: "Always" }}
      changed={(value) => {
        setDateRange(value);
      }}
      periodSelectorSettings={periodSelectorSettings}
      intervalType="Days"
      groupBy="Days"
      allowIntervalData={false}
      interval={1}
      enableDeferredUpdate
      allowSnapping
      navigatorStyleSettings={{
        unselectedRegionColor: "rgba(60, 60, 60, 0.7)",
      }}
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
            fill="green"
          />
        )}
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>
  );
};

export default RangeSliderWithPeriodSelector;

import {
  DateTime,
  Inject,
  LineSeries,
  RangeNavigatorComponent,
  RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective,
  RangeTooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";

const RangeSliderWithoutPeriodSelector = ({
  dataSource = [],
  setDateRange,
  xName,
  yName = "y",
}) => {
  if (!dataSource.length) {
    return null;
  }

  return (
    <RangeNavigatorComponent
      id="charts1"
      valueType="DateTime"
      value={[new Date("2022-01-01"), new Date("2022-02-01")]}
      tooltip={{ enable: true, displayMode: "Always" }}
      changed={(value) => {
        setDateRange(value);
      }}
      allowIntervalData={false}
      intervalType="Minutes"
      interval={5}
      enableDeferredUpdate={true}
      navigatorStyleSettings={{
        selectedRegionColor: "grey",
        unselectedRegionColor: "black",
      }}
    >
      <Inject services={[LineSeries, DateTime, RangeTooltip]} />
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

export default RangeSliderWithoutPeriodSelector;

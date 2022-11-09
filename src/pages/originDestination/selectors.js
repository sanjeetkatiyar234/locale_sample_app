import moment from "moment";
import { createSelector } from "reselect";

// state selectors
const h3SampleDataSelector = (state) =>
  state.pages.originDestination.h3SampleData;
const filterTypeValueSelector = (state) => state.filterType.value;

export const h3SampleDataWithFilterTypeSelector = createSelector(
  [h3SampleDataSelector, filterTypeValueSelector],
  (sampleData = [], filterTypeValue) => {
    const todayDate = moment().subtract(10, "M");
    const filterData =
      filterTypeValue === "intraDay"
        ? sampleData.filter((d) =>
            moment(d.start_time).isSameOrAfter(todayDate)
          )
        : sampleData;

    return filterData?.filter((d) => !!d.hex_id);
  }
);

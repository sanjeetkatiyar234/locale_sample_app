import moment from "moment";
import { createSelector } from "reselect";

// state selectors
const queryHiveDataSelector = (state) => state.data.queryHive;
const filterTypeValueSelector = (state) => state.filterType.value;

export const queryHiveDataWithFilterTypeSelector = createSelector(
  [queryHiveDataSelector, filterTypeValueSelector],
  (sampleData = [], filterTypeValue) => {
    const todayDate = moment().subtract(10, "M");
    const filterData =
      filterTypeValue === "daily"
        ? sampleData.filter((d) =>
            moment(d.start_time).isSameOrAfter(todayDate)
          )
        : sampleData;

    return filterData?.filter(
      (d) =>
        d.start_loc[0] != null &&
        d.start_loc[1] != null &&
        d.end_loc[0] != null &&
        d.end_loc[1] != null
    );
  }
);

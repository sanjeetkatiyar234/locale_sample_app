import { createSelector } from "reselect";

// state selectors
const queryHiveDataSelector = (state) => state.data.queryHive;
const selectedArcLayerSelector = (state) =>
  state.pages.rideShareDemand.selectedArcLayer;
const searchSelector = (state, isSearch) => isSearch;

export const arcLayerDataSelector = createSelector(
  [queryHiveDataSelector, selectedArcLayerSelector, searchSelector],
  (sampleData = [], selectedArcLayerData = [], isSearch) => {
    const data = isSearch ? selectedArcLayerData : sampleData;

    // const todayDate = moment().subtract(10, "M");
    // const filterData =
    //   filterTypeValue === "daily"
    //     ? data.filter((d) => moment(d.start_time).isSameOrAfter(todayDate))
    //     : data;

    return data?.filter((d) =>
      isSearch
        ? d.start_hex != null && d.end_hex != null
        : d.start_loc[0] != null &&
          d.start_loc[1] != null &&
          d.end_loc[0] != null &&
          d.end_loc[1] != null
    );
  }
);

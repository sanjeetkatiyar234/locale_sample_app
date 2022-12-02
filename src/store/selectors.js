import { createSelector } from "reselect";

// state selectors
const queryHiveDataSelector = (state) => state.data.queryHive;

export const queryHiveDataWithFilterTypeSelector = createSelector(
  [queryHiveDataSelector],
  (sampleData) => {
    return sampleData?.filter(
      (d) =>
        d.start_loc[0] != null &&
        d.start_loc[1] != null &&
        d.end_loc[0] != null &&
        d.end_loc[1] != null
    );
  }
);

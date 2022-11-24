import moment from "moment";
import { createSelector } from "reselect";

// state selectors
const sateDataSelector = (state) => state.pages.originDestination.data.combine;

export const h3HexDataSelector = createSelector(
  [sateDataSelector],
  (sampleData = []) => {
    return sampleData?.filter((d) => !!d.hex_id);
  }
);

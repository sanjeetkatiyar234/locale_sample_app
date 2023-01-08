import { createSelector } from "reselect";
import { combineDuplicateDataVehicleCount } from "./utils";

// state selectors
const sateDataSelector = (state) => state.pages.originDestination.data;

export const h3HexDataSelector = createSelector(
  [sateDataSelector],
  (sampleData = []) => {
    const reduceData = combineDuplicateDataVehicleCount(sampleData);
    return reduceData?.filter((d) => !!d.hex_id);
  }
);

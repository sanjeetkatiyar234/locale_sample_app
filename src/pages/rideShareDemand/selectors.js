import moment from "moment";
import { createSelector } from 'reselect';

// state selectors
const queryHiveDataSelector = (state) => state.data.queryHive;
const selectedArcLayerSelector = (state) => state.pages.rideShareDemand.selectedArcLayer;
const filterTypeValueSelector = (state) => state.filterType.value;
const searchSelector = (state, isSearch) => isSearch;

export const arcLayerDataSelector = createSelector([queryHiveDataSelector, selectedArcLayerSelector, filterTypeValueSelector, searchSelector],
    (sampleData = [], selectedArcLayerData = [], filterTypeValue, isSearch) => {
        const data = isSearch ? selectedArcLayerData : sampleData;

        const todayDate = moment().subtract(10, "M");
        const filterData = filterTypeValue === "intraDay"
            ? data.filter((d) => moment(d.start_time).isSameOrAfter(todayDate))
            : data;

        return filterData?.filter((d) => isSearch ? (d.start_hex != null && d.end_hex != null) :
            (d.start_loc[0] != null &&
                d.start_loc[1] != null &&
                d.end_loc[0] != null &&
                d.end_loc[1] != null));
    });
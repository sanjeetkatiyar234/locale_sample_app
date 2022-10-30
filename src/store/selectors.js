import moment from 'moment';
import {createSelector} from 'reselect';

// state selectors
const queryHiveDataSelector=(state)=>state.data.queryHive;
const h3SampleDataSelector=(state)=>state.data.h3SampleData;
const filterTypeValueSelector = (state) => state.filterType.value;

export const queryHiveDataWithFilterTypeSelector=createSelector([queryHiveDataSelector,filterTypeValueSelector],
(sampleData=[],filterTypeValue)=>{
   
    const todayDate = moment().subtract(9, "M");
    const filterData=filterTypeValue === "intraDay"
      ? sampleData.filter((d) => moment(d.start_time).isSameOrAfter(todayDate))
      : sampleData;

      return filterData?.filter((d) =>
      d.start_loc[0] != null &&
      d.start_loc[1] != null &&
      d.end_loc[0] != null &&
      d.end_loc[1] != null);
});

export const h3SampleDataWithFilterTypeSelector=createSelector([h3SampleDataSelector,filterTypeValueSelector],
(sampleData=[],filterTypeValue)=>{
    const todayDate = moment().subtract(9, "M");
    const filterData=  filterTypeValue === "intraDay"
      ? sampleData.filter(
          (d) =>
            moment(d.start_time).isSameOrAfter(todayDate) &&
            moment(d.end_time).isSameOrAfter(todayDate)
        )
      : sampleData;

      return filterData?.filter((d) => !!d.hex_id);
});
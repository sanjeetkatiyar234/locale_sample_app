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
      ? sampleData.filter((d) => moment(d.dateTime).isSameOrAfter(todayDate))
      : sampleData;

      return filterData?.filter((d) =>
      d.startPosition[0] != null &&
      d.startPosition[1] != null &&
      d.endPosition[0] != null &&
      d.endPosition[1] != null &&
      d.start_hex);
});

export const h3SampleDataWithFilterTypeSelector=createSelector([h3SampleDataSelector,filterTypeValueSelector],
(sampleData=[],filterTypeValue)=>{
    const todayDate = moment().subtract(9, "M");
    const filterData=  filterTypeValue === "intraDay"
      ? sampleData.filter(
          (d) =>
            moment(d.start).isSameOrAfter(todayDate) &&
            moment(d.end).isSameOrAfter(todayDate)
        )
      : sampleData;

      return filterData?.filter((d) => !!d.Hex);
});
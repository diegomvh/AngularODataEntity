import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeRange } from './timerange.complex';
import { TimeRangeModel } from './timerange.model';
import { TimeRangeCollection } from './timerange.collection';
//#endregion

export const TimeRangeConfig = {
  name: "timeRange",
  model: TimeRangeModel,
  collection: TimeRangeCollection,
  annotations: [],
  fields: {
    endTime: {type: 'Edm.TimeOfDay'},
    startTime: {type: 'Edm.TimeOfDay'}
  }
} as StructuredTypeConfig<TimeRange>;
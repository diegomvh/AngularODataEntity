import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeRange } from './timerange.entity';
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
} as EntityConfig<TimeRange>;
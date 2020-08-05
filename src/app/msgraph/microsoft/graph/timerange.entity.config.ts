import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeRange } from './timerange.entity';
//#endregion

export const TimeRangeConfig = {
  name: "TimeRange",
  annotations: [],
  fields: {
    startTime: {type: 'Edm.TimeOfDay'},
    endTime: {type: 'Edm.TimeOfDay'}
  }
} as EntityConfig<TimeRange>;
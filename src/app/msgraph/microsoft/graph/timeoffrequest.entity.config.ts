import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffRequest } from './timeoffrequest.entity';
//#endregion

export const TimeOffRequestConfig = {
  name: "timeOffRequest",
  base: "microsoft.graph.scheduleChangeRequest",
  annotations: [],
  fields: {
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    timeOffReasonId: {type: 'Edm.String'}
  }
} as EntityConfig<TimeOffRequest>;
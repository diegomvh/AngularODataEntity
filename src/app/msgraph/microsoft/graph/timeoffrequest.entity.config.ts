import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffRequest } from './timeoffrequest.entity';
import { TimeOffRequestModel } from './timeoffrequest.model';
import { TimeOffRequestCollection } from './timeoffrequest.collection';
//#endregion

export const TimeOffRequestConfig = {
  name: "timeOffRequest",
  base: "microsoft.graph.scheduleChangeRequest",
  model: TimeOffRequestModel,
  collection: TimeOffRequestCollection,
  annotations: [],
  fields: {
    endDateTime: {type: 'Edm.DateTimeOffset'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    timeOffReasonId: {type: 'Edm.String'}
  }
} as EntityConfig<TimeOffRequest>;
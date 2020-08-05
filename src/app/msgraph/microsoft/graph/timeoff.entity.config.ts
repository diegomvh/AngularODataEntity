import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOff } from './timeoff.entity';
//#endregion

export const TimeOffConfig = {
  name: "timeOff",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    sharedTimeOff: {type: 'graph.timeOffItem'},
    draftTimeOff: {type: 'graph.timeOffItem'},
    userId: {type: 'Edm.String'}
  }
} as EntityConfig<TimeOff>;
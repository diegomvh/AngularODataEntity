import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffReason } from './timeoffreason.entity';
//#endregion

export const TimeOffReasonConfig = {
  name: "timeOffReason",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    iconType: {type: 'graph.timeOffReasonIconType'},
    isActive: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TimeOffReason>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffReason } from './timeoffreason.entity';
//#endregion

export const TimeOffReasonConfig = {
  name: "TimeOffReason",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    iconType: {type: 'graph.timeOffReasonIconType'},
    isActive: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TimeOffReason>;
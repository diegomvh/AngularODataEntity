import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffReason } from './timeoffreason.entity';
import { TimeOffReasonModel } from './timeoffreason.model';
import { TimeOffReasonCollection } from './timeoffreason.collection';
//#endregion

export const TimeOffReasonConfig = {
  name: "timeOffReason",
  base: "microsoft.graph.changeTrackedEntity",
  model: TimeOffReasonModel,
  collection: TimeOffReasonCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    iconType: {type: 'graph.timeOffReasonIconType'},
    isActive: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TimeOffReason>;
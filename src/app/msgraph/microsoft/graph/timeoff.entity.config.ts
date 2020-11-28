import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOff } from './timeoff.entity';
import { TimeOffModel } from './timeoff.model';
import { TimeOffCollection } from './timeoff.collection';
//#endregion

export const TimeOffConfig = {
  name: "timeOff",
  base: "microsoft.graph.changeTrackedEntity",
  model: TimeOffModel,
  collection: TimeOffCollection,
  annotations: [],
  fields: {
    draftTimeOff: {type: 'graph.timeOffItem'},
    sharedTimeOff: {type: 'graph.timeOffItem'},
    userId: {type: 'Edm.String'}
  }
} as EntityConfig<TimeOff>;
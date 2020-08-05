import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeConstraint } from './timeconstraint.entity';
//#endregion

export const TimeConstraintConfig = {
  name: "timeConstraint",
  annotations: [],
  fields: {
    activityDomain: {type: 'graph.activityDomain'},
    timeSlots: {type: 'graph.timeSlot', collection: true}
  }
} as EntityConfig<TimeConstraint>;
import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeConstraint } from './timeconstraint.complex';
import { TimeConstraintModel } from './timeconstraint.model';
import { TimeConstraintCollection } from './timeconstraint.collection';
//#endregion

export const TimeConstraintConfig = {
  name: "timeConstraint",
  model: TimeConstraintModel,
  collection: TimeConstraintCollection,
  annotations: [],
  fields: {
    activityDomain: {type: 'graph.activityDomain'},
    timeSlots: {type: 'graph.timeSlot', collection: true}
  }
} as StructuredTypeConfig<TimeConstraint>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Shift } from './shift.entity';
import { ShiftModel } from './shift.model';
import { ShiftCollection } from './shift.collection';
//#endregion

export const ShiftConfig = {
  name: "shift",
  base: "microsoft.graph.changeTrackedEntity",
  model: ShiftModel,
  collection: ShiftCollection,
  annotations: [],
  fields: {
    draftShift: {type: 'graph.shiftItem'},
    schedulingGroupId: {type: 'Edm.String'},
    sharedShift: {type: 'graph.shiftItem'},
    userId: {type: 'Edm.String'}
  }
} as EntityConfig<Shift>;
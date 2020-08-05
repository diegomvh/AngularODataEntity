import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Shift } from './shift.entity';
//#endregion

export const ShiftConfig = {
  name: "Shift",
  base: "microsoft.graph.changeTrackedEntity",
  annotations: [],
  fields: {
    sharedShift: {type: 'graph.shiftItem'},
    draftShift: {type: 'graph.shiftItem'},
    userId: {type: 'Edm.String'},
    schedulingGroupId: {type: 'Edm.String'}
  }
} as EntityConfig<Shift>;
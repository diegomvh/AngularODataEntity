import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftActivity } from './shiftactivity.entity';
import { ShiftActivityModel } from './shiftactivity.model';
import { ShiftActivityCollection } from './shiftactivity.collection';
//#endregion

export const ShiftActivityConfig = {
  name: "shiftActivity",
  model: ShiftActivityModel,
  collection: ShiftActivityCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    isPaid: {type: 'Edm.Boolean'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    theme: {type: 'graph.scheduleEntityTheme', nullable: false}
  }
} as EntityConfig<ShiftActivity>;
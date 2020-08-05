import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftActivity } from './shiftactivity.entity';
//#endregion

export const ShiftActivityConfig = {
  name: "shiftActivity",
  annotations: [],
  fields: {
    isPaid: {type: 'Edm.Boolean'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    code: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    theme: {type: 'graph.scheduleEntityTheme', nullable: false}
  }
} as EntityConfig<ShiftActivity>;
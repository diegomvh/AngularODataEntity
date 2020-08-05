import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftItem } from './shiftitem.entity';
//#endregion

export const ShiftItemConfig = {
  name: "shiftItem",
  base: "microsoft.graph.scheduleEntity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    notes: {type: 'Edm.String'},
    activities: {type: 'graph.shiftActivity', collection: true}
  }
} as EntityConfig<ShiftItem>;
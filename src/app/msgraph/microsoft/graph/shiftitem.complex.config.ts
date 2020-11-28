import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftItem } from './shiftitem.complex';
import { ShiftItemModel } from './shiftitem.model';
import { ShiftItemCollection } from './shiftitem.collection';
//#endregion

export const ShiftItemConfig = {
  name: "shiftItem",
  base: "microsoft.graph.scheduleEntity",
  model: ShiftItemModel,
  collection: ShiftItemCollection,
  annotations: [],
  fields: {
    activities: {type: 'graph.shiftActivity', collection: true},
    displayName: {type: 'Edm.String'},
    notes: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ShiftItem>;
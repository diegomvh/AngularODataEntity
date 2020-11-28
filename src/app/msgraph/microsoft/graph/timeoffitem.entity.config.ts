import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffItem } from './timeoffitem.entity';
import { TimeOffItemModel } from './timeoffitem.model';
import { TimeOffItemCollection } from './timeoffitem.collection';
//#endregion

export const TimeOffItemConfig = {
  name: "timeOffItem",
  base: "microsoft.graph.scheduleEntity",
  model: TimeOffItemModel,
  collection: TimeOffItemCollection,
  annotations: [],
  fields: {
    timeOffReasonId: {type: 'Edm.String'}
  }
} as EntityConfig<TimeOffItem>;
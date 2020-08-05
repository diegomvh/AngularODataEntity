import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffItem } from './timeoffitem.entity';
//#endregion

export const TimeOffItemConfig = {
  name: "TimeOffItem",
  base: "microsoft.graph.scheduleEntity",
  annotations: [],
  fields: {
    timeOffReasonId: {type: 'Edm.String'}
  }
} as EntityConfig<TimeOffItem>;
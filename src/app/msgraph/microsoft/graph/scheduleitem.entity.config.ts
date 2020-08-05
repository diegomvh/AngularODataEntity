import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleItem } from './scheduleitem.entity';
//#endregion

export const ScheduleItemConfig = {
  name: "ScheduleItem",
  annotations: [],
  fields: {
    start: {type: 'graph.dateTimeTimeZone'},
    end: {type: 'graph.dateTimeTimeZone'},
    isPrivate: {type: 'Edm.Boolean'},
    status: {type: 'graph.freeBusyStatus'},
    subject: {type: 'Edm.String'},
    location: {type: 'Edm.String'}
  }
} as EntityConfig<ScheduleItem>;
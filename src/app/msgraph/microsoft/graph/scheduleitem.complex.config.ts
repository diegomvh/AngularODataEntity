import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleItem } from './scheduleitem.complex';
import { ScheduleItemModel } from './scheduleitem.model';
import { ScheduleItemCollection } from './scheduleitem.collection';
//#endregion

export const ScheduleItemConfig = {
  name: "scheduleItem",
  model: ScheduleItemModel,
  collection: ScheduleItemCollection,
  annotations: [],
  fields: {
    end: {type: 'graph.dateTimeTimeZone'},
    isPrivate: {type: 'Edm.Boolean'},
    location: {type: 'Edm.String'},
    start: {type: 'graph.dateTimeTimeZone'},
    status: {type: 'graph.freeBusyStatus'},
    subject: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ScheduleItem>;
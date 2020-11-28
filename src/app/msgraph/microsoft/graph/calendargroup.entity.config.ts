import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarGroup } from './calendargroup.entity';
import { CalendarGroupModel } from './calendargroup.model';
import { CalendarGroupCollection } from './calendargroup.collection';
//#endregion

export const CalendarGroupConfig = {
  name: "calendarGroup",
  base: "microsoft.graph.entity",
  model: CalendarGroupModel,
  collection: CalendarGroupCollection,
  annotations: [],
  fields: {
    changeKey: {type: 'Edm.String'},
    classId: {type: 'Edm.Guid'},
    name: {type: 'Edm.String'},
    calendars: {type: 'graph.calendar', collection: true, navigation: true}
  }
} as StructuredTypeConfig<CalendarGroup>;
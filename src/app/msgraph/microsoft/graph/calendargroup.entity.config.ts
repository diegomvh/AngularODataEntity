import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarGroup } from './calendargroup.entity';
//#endregion

export const CalendarGroupConfig = {
  name: "calendarGroup",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    classId: {type: 'Edm.Guid'},
    changeKey: {type: 'Edm.String'},
    calendars: {type: 'graph.calendar', collection: true, navigation: true}
  }
} as EntityConfig<CalendarGroup>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.entity';
//#endregion

export const CalendarSharingMessageActionConfig = {
  name: "calendarSharingMessageAction",
  annotations: [],
  fields: {
    importance: {type: 'graph.calendarSharingActionImportance'},
    actionType: {type: 'graph.calendarSharingActionType'},
    action: {type: 'graph.calendarSharingAction'}
  }
} as EntityConfig<CalendarSharingMessageAction>;
import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingMessageAction } from './calendarsharingmessageaction.complex';
import { CalendarSharingMessageActionModel } from './calendarsharingmessageaction.model';
import { CalendarSharingMessageActionCollection } from './calendarsharingmessageaction.collection';
//#endregion

export const CalendarSharingMessageActionConfig = {
  name: "calendarSharingMessageAction",
  model: CalendarSharingMessageActionModel,
  collection: CalendarSharingMessageActionCollection,
  annotations: [],
  fields: {
    action: {type: 'graph.calendarSharingAction'},
    actionType: {type: 'graph.calendarSharingActionType'},
    importance: {type: 'graph.calendarSharingActionImportance'}
  }
} as StructuredTypeConfig<CalendarSharingMessageAction>;
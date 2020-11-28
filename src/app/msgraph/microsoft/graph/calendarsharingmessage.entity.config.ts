import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingMessage } from './calendarsharingmessage.entity';
import { CalendarSharingMessageModel } from './calendarsharingmessage.model';
import { CalendarSharingMessageCollection } from './calendarsharingmessage.collection';
//#endregion

export const CalendarSharingMessageConfig = {
  name: "calendarSharingMessage",
  base: "microsoft.graph.message",
  model: CalendarSharingMessageModel,
  collection: CalendarSharingMessageCollection,
  annotations: [],
  fields: {
    canAccept: {type: 'Edm.Boolean'},
    sharingMessageAction: {type: 'graph.calendarSharingMessageAction'},
    sharingMessageActions: {type: 'graph.calendarSharingMessageAction', collection: true},
    suggestedCalendarName: {type: 'Edm.String'}
  }
} as EntityConfig<CalendarSharingMessage>;
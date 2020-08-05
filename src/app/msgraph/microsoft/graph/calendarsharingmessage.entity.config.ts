import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CalendarSharingMessage } from './calendarsharingmessage.entity';
//#endregion

export const CalendarSharingMessageConfig = {
  name: "CalendarSharingMessage",
  base: "microsoft.graph.message",
  annotations: [],
  fields: {
    canAccept: {type: 'Edm.Boolean'},
    suggestedCalendarName: {type: 'Edm.String'},
    sharingMessageAction: {type: 'graph.calendarSharingMessageAction'},
    sharingMessageActions: {type: 'graph.calendarSharingMessageAction', collection: true}
  }
} as EntityConfig<CalendarSharingMessage>;
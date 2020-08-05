import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventMessage } from './eventmessage.entity';
//#endregion

export const EventMessageConfig = {
  name: "EventMessage",
  base: "microsoft.graph.message",
  annotations: [],
  fields: {
    meetingMessageType: {type: 'graph.meetingMessageType'},
    startDateTime: {type: 'graph.dateTimeTimeZone'},
    endDateTime: {type: 'graph.dateTimeTimeZone'},
    location: {type: 'graph.location'},
    type: {type: 'graph.eventType'},
    recurrence: {type: 'graph.patternedRecurrence'},
    isOutOfDate: {type: 'Edm.Boolean'},
    isAllDay: {type: 'Edm.Boolean'},
    isDelegated: {type: 'Edm.Boolean'},
    event: {type: 'graph.event', navigation: true}
  }
} as EntityConfig<EventMessage>;
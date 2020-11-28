import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EventMessage } from './eventmessage.entity';
import { EventMessageModel } from './eventmessage.model';
import { EventMessageCollection } from './eventmessage.collection';
//#endregion

export const EventMessageConfig = {
  name: "eventMessage",
  base: "microsoft.graph.message",
  model: EventMessageModel,
  collection: EventMessageCollection,
  annotations: [],
  fields: {
    endDateTime: {type: 'graph.dateTimeTimeZone'},
    isAllDay: {type: 'Edm.Boolean'},
    isDelegated: {type: 'Edm.Boolean'},
    isOutOfDate: {type: 'Edm.Boolean'},
    location: {type: 'graph.location'},
    meetingMessageType: {type: 'graph.meetingMessageType'},
    recurrence: {type: 'graph.patternedRecurrence'},
    startDateTime: {type: 'graph.dateTimeTimeZone'},
    type: {type: 'graph.eventType'},
    event: {type: 'graph.event', navigation: true}
  }
} as StructuredTypeConfig<EventMessage>;
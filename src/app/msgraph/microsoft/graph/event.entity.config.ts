import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Event } from './event.entity';
import { EventModel } from './event.model';
import { EventCollection } from './event.collection';
//#endregion

export const EventConfig = {
  name: "event",
  base: "microsoft.graph.outlookItem",
  open: true,
  model: EventModel,
  collection: EventCollection,
  annotations: [],
  fields: {
    allowNewTimeProposals: {type: 'Edm.Boolean'},
    attendees: {type: 'graph.attendee', collection: true},
    body: {type: 'graph.itemBody'},
    bodyPreview: {type: 'Edm.String'},
    end: {type: 'graph.dateTimeTimeZone'},
    hasAttachments: {type: 'Edm.Boolean'},
    iCalUId: {type: 'Edm.String'},
    importance: {type: 'graph.importance'},
    isAllDay: {type: 'Edm.Boolean'},
    isCancelled: {type: 'Edm.Boolean'},
    isDraft: {type: 'Edm.Boolean'},
    isOnlineMeeting: {type: 'Edm.Boolean'},
    isOrganizer: {type: 'Edm.Boolean'},
    isReminderOn: {type: 'Edm.Boolean'},
    location: {type: 'graph.location'},
    locations: {type: 'graph.location', collection: true},
    onlineMeeting: {type: 'graph.onlineMeetingInfo'},
    onlineMeetingProvider: {type: 'graph.onlineMeetingProviderType'},
    onlineMeetingUrl: {type: 'Edm.String'},
    organizer: {type: 'graph.recipient'},
    originalEndTimeZone: {type: 'Edm.String'},
    originalStart: {type: 'Edm.DateTimeOffset'},
    originalStartTimeZone: {type: 'Edm.String'},
    recurrence: {type: 'graph.patternedRecurrence'},
    reminderMinutesBeforeStart: {type: 'Edm.Int32'},
    responseRequested: {type: 'Edm.Boolean'},
    responseStatus: {type: 'graph.responseStatus'},
    sensitivity: {type: 'graph.sensitivity'},
    seriesMasterId: {type: 'Edm.String'},
    showAs: {type: 'graph.freeBusyStatus'},
    start: {type: 'graph.dateTimeTimeZone'},
    subject: {type: 'Edm.String'},
    transactionId: {type: 'Edm.String'},
    type: {type: 'graph.eventType'},
    webLink: {type: 'Edm.String'},
    attachments: {type: 'graph.attachment', collection: true, navigation: true},
    calendar: {type: 'graph.calendar', navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    instances: {type: 'graph.event', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Event>;
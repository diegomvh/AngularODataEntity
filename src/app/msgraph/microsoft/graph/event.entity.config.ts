import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Event } from './event.entity';
//#endregion

export const EventConfig = {
  name: "event",
  base: "microsoft.graph.outlookItem",
  open: true,
  annotations: [],
  fields: {
    originalStartTimeZone: {type: 'Edm.String'},
    originalEndTimeZone: {type: 'Edm.String'},
    responseStatus: {type: 'graph.responseStatus'},
    iCalUId: {type: 'Edm.String'},
    reminderMinutesBeforeStart: {type: 'Edm.Int32'},
    isReminderOn: {type: 'Edm.Boolean'},
    hasAttachments: {type: 'Edm.Boolean'},
    subject: {type: 'Edm.String'},
    body: {type: 'graph.itemBody'},
    bodyPreview: {type: 'Edm.String'},
    importance: {type: 'graph.importance'},
    sensitivity: {type: 'graph.sensitivity'},
    start: {type: 'graph.dateTimeTimeZone'},
    originalStart: {type: 'Edm.DateTimeOffset'},
    end: {type: 'graph.dateTimeTimeZone'},
    location: {type: 'graph.location'},
    locations: {type: 'graph.location', collection: true},
    isAllDay: {type: 'Edm.Boolean'},
    isCancelled: {type: 'Edm.Boolean'},
    isOrganizer: {type: 'Edm.Boolean'},
    recurrence: {type: 'graph.patternedRecurrence'},
    responseRequested: {type: 'Edm.Boolean'},
    seriesMasterId: {type: 'Edm.String'},
    showAs: {type: 'graph.freeBusyStatus'},
    type: {type: 'graph.eventType'},
    attendees: {type: 'graph.attendee', collection: true},
    organizer: {type: 'graph.recipient'},
    webLink: {type: 'Edm.String'},
    onlineMeetingUrl: {type: 'Edm.String'},
    isOnlineMeeting: {type: 'Edm.Boolean'},
    onlineMeetingProvider: {type: 'graph.onlineMeetingProviderType'},
    onlineMeeting: {type: 'graph.onlineMeetingInfo'},
    allowNewTimeProposals: {type: 'Edm.Boolean'},
    attachments: {type: 'graph.attachment', collection: true, navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    calendar: {type: 'graph.calendar', navigation: true},
    instances: {type: 'graph.event', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true}
  }
} as EntityConfig<Event>;
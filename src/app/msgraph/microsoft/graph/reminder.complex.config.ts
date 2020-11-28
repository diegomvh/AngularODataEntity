import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Reminder } from './reminder.complex';
import { ReminderModel } from './reminder.model';
import { ReminderCollection } from './reminder.collection';
//#endregion

export const ReminderConfig = {
  name: "reminder",
  model: ReminderModel,
  collection: ReminderCollection,
  annotations: [],
  fields: {
    changeKey: {type: 'Edm.String'},
    eventEndTime: {type: 'graph.dateTimeTimeZone'},
    eventId: {type: 'Edm.String'},
    eventLocation: {type: 'graph.location'},
    eventStartTime: {type: 'graph.dateTimeTimeZone'},
    eventSubject: {type: 'Edm.String'},
    eventWebLink: {type: 'Edm.String'},
    reminderFireTime: {type: 'graph.dateTimeTimeZone'}
  }
} as StructuredTypeConfig<Reminder>;
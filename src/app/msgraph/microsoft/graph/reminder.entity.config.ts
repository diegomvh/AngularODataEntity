import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Reminder } from './reminder.entity';
//#endregion

export const ReminderConfig = {
  name: "reminder",
  annotations: [],
  fields: {
    eventId: {type: 'Edm.String'},
    eventStartTime: {type: 'graph.dateTimeTimeZone'},
    eventEndTime: {type: 'graph.dateTimeTimeZone'},
    changeKey: {type: 'Edm.String'},
    eventSubject: {type: 'Edm.String'},
    eventLocation: {type: 'graph.location'},
    eventWebLink: {type: 'Edm.String'},
    reminderFireTime: {type: 'graph.dateTimeTimeZone'}
  }
} as EntityConfig<Reminder>;
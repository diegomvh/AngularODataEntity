import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeAvailability } from './attendeeavailability.entity';
//#endregion

export const AttendeeAvailabilityConfig = {
  name: "AttendeeAvailability",
  annotations: [],
  fields: {
    attendee: {type: 'graph.attendeeBase'},
    availability: {type: 'graph.freeBusyStatus'}
  }
} as EntityConfig<AttendeeAvailability>;
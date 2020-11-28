import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeAvailability } from './attendeeavailability.entity';
import { AttendeeAvailabilityModel } from './attendeeavailability.model';
import { AttendeeAvailabilityCollection } from './attendeeavailability.collection';
//#endregion

export const AttendeeAvailabilityConfig = {
  name: "attendeeAvailability",
  model: AttendeeAvailabilityModel,
  collection: AttendeeAvailabilityCollection,
  annotations: [],
  fields: {
    attendee: {type: 'graph.attendeeBase'},
    availability: {type: 'graph.freeBusyStatus'}
  }
} as EntityConfig<AttendeeAvailability>;
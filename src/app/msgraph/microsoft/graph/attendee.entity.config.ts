import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Attendee } from './attendee.entity';
//#endregion

export const AttendeeConfig = {
  name: "Attendee",
  base: "microsoft.graph.attendeeBase",
  annotations: [],
  fields: {
    status: {type: 'graph.responseStatus'},
    proposedNewTime: {type: 'graph.timeSlot'}
  }
} as EntityConfig<Attendee>;
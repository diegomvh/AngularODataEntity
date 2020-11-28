import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Attendee } from './attendee.entity';
import { AttendeeModel } from './attendee.model';
import { AttendeeCollection } from './attendee.collection';
//#endregion

export const AttendeeConfig = {
  name: "attendee",
  base: "microsoft.graph.attendeeBase",
  model: AttendeeModel,
  collection: AttendeeCollection,
  annotations: [],
  fields: {
    proposedNewTime: {type: 'graph.timeSlot'},
    status: {type: 'graph.responseStatus'}
  }
} as EntityConfig<Attendee>;
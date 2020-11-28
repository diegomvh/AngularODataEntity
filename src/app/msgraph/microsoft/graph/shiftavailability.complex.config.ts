import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftAvailability } from './shiftavailability.complex';
import { ShiftAvailabilityModel } from './shiftavailability.model';
import { ShiftAvailabilityCollection } from './shiftavailability.collection';
//#endregion

export const ShiftAvailabilityConfig = {
  name: "shiftAvailability",
  model: ShiftAvailabilityModel,
  collection: ShiftAvailabilityCollection,
  annotations: [],
  fields: {
    recurrence: {type: 'graph.patternedRecurrence'},
    timeSlots: {type: 'graph.timeRange', collection: true},
    timeZone: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ShiftAvailability>;
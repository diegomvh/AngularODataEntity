import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftAvailability } from './shiftavailability.entity';
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
} as EntityConfig<ShiftAvailability>;
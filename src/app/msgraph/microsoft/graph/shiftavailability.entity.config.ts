import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ShiftAvailability } from './shiftavailability.entity';
//#endregion

export const ShiftAvailabilityConfig = {
  name: "ShiftAvailability",
  annotations: [],
  fields: {
    recurrence: {type: 'graph.patternedRecurrence'},
    timeZone: {type: 'Edm.String'},
    timeSlots: {type: 'graph.timeRange', collection: true}
  }
} as EntityConfig<ShiftAvailability>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeSlot } from './timeslot.entity';
//#endregion

export const TimeSlotConfig = {
  name: "timeSlot",
  annotations: [],
  fields: {
    start: {type: 'graph.dateTimeTimeZone', nullable: false},
    end: {type: 'graph.dateTimeTimeZone', nullable: false}
  }
} as EntityConfig<TimeSlot>;
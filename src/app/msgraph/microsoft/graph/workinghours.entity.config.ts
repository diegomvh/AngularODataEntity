import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkingHours } from './workinghours.entity';
//#endregion

export const WorkingHoursConfig = {
  name: "WorkingHours",
  annotations: [],
  fields: {
    daysOfWeek: {type: 'graph.dayOfWeek', collection: true},
    startTime: {type: 'Edm.TimeOfDay'},
    endTime: {type: 'Edm.TimeOfDay'},
    timeZone: {type: 'graph.timeZoneBase'}
  }
} as EntityConfig<WorkingHours>;
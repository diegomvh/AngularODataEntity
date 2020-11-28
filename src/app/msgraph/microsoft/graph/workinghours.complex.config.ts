import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkingHours } from './workinghours.complex';
import { WorkingHoursModel } from './workinghours.model';
import { WorkingHoursCollection } from './workinghours.collection';
//#endregion

export const WorkingHoursConfig = {
  name: "workingHours",
  model: WorkingHoursModel,
  collection: WorkingHoursCollection,
  annotations: [],
  fields: {
    daysOfWeek: {type: 'graph.dayOfWeek', collection: true},
    endTime: {type: 'Edm.TimeOfDay'},
    startTime: {type: 'Edm.TimeOfDay'},
    timeZone: {type: 'graph.timeZoneBase'}
  }
} as StructuredTypeConfig<WorkingHours>;
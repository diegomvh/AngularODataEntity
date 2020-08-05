import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleInformation } from './scheduleinformation.entity';
//#endregion

export const ScheduleInformationConfig = {
  name: "ScheduleInformation",
  annotations: [],
  fields: {
    scheduleId: {type: 'Edm.String'},
    scheduleItems: {type: 'graph.scheduleItem', collection: true},
    availabilityView: {type: 'Edm.String'},
    error: {type: 'graph.freeBusyError'},
    workingHours: {type: 'graph.workingHours'}
  }
} as EntityConfig<ScheduleInformation>;
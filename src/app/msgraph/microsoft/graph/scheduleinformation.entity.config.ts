import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleInformation } from './scheduleinformation.entity';
import { ScheduleInformationModel } from './scheduleinformation.model';
import { ScheduleInformationCollection } from './scheduleinformation.collection';
//#endregion

export const ScheduleInformationConfig = {
  name: "scheduleInformation",
  model: ScheduleInformationModel,
  collection: ScheduleInformationCollection,
  annotations: [],
  fields: {
    availabilityView: {type: 'Edm.String'},
    error: {type: 'graph.freeBusyError'},
    scheduleId: {type: 'Edm.String'},
    scheduleItems: {type: 'graph.scheduleItem', collection: true},
    workingHours: {type: 'graph.workingHours'}
  }
} as EntityConfig<ScheduleInformation>;
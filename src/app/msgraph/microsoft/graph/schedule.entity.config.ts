import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Schedule } from './schedule.entity';
import { ScheduleModel } from './schedule.model';
import { ScheduleCollection } from './schedule.collection';
//#endregion

export const ScheduleConfig = {
  name: "schedule",
  base: "microsoft.graph.entity",
  model: ScheduleModel,
  collection: ScheduleCollection,
  annotations: [],
  fields: {
    enabled: {type: 'Edm.Boolean'},
    offerShiftRequestsEnabled: {type: 'Edm.Boolean'},
    openShiftsEnabled: {type: 'Edm.Boolean'},
    provisionStatus: {type: 'graph.operationStatus'},
    provisionStatusCode: {type: 'Edm.String'},
    swapShiftsRequestsEnabled: {type: 'Edm.Boolean'},
    timeClockEnabled: {type: 'Edm.Boolean'},
    timeOffRequestsEnabled: {type: 'Edm.Boolean'},
    timeZone: {type: 'Edm.String'},
    workforceIntegrationIds: {type: 'Edm.String', collection: true},
    offerShiftRequests: {type: 'graph.offerShiftRequest', collection: true, navigation: true},
    openShiftChangeRequests: {type: 'graph.openShiftChangeRequest', collection: true, navigation: true},
    openShifts: {type: 'graph.openShift', collection: true, navigation: true},
    schedulingGroups: {type: 'graph.schedulingGroup', collection: true, navigation: true},
    shifts: {type: 'graph.shift', collection: true, navigation: true},
    swapShiftsChangeRequests: {type: 'graph.swapShiftsChangeRequest', collection: true, navigation: true},
    timeOffReasons: {type: 'graph.timeOffReason', collection: true, navigation: true},
    timeOffRequests: {type: 'graph.timeOffRequest', collection: true, navigation: true},
    timesOff: {type: 'graph.timeOff', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Schedule>;
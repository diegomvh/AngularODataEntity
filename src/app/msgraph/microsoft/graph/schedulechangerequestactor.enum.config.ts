import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeRequestActor } from './schedulechangerequestactor.enum';
//#endregion

export const ScheduleChangeRequestActorConfig = {
  name: "ScheduleChangeRequestActor",
  members: ScheduleChangeRequestActor
} as EnumConfig<ScheduleChangeRequestActor>;
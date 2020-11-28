import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeState } from './schedulechangestate.enum';
//#endregion

export const ScheduleChangeStateConfig = {
  name: "scheduleChangeState",
  members: ScheduleChangeState
} as EnumTypeConfig<ScheduleChangeState>;
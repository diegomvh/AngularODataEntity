﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleChangeState } from './schedulechangestate.enum';
//#endregion

export const ScheduleChangeStateConfig = {
  name: "ScheduleChangeState",
  members: ScheduleChangeState
} as EnumConfig<ScheduleChangeState>;
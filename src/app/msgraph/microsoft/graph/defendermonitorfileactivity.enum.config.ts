import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderMonitorFileActivity } from './defendermonitorfileactivity.enum';
//#endregion

export const DefenderMonitorFileActivityConfig = {
  name: "defenderMonitorFileActivity",
  members: DefenderMonitorFileActivity
} as EnumConfig<DefenderMonitorFileActivity>;
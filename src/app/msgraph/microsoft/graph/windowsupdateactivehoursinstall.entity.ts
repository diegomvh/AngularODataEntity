import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.entity';
//#endregion

export interface WindowsUpdateActiveHoursInstall extends WindowsUpdateInstallScheduleType {
  //#region ODataApi Properties
  activeHoursStart: Date;
  activeHoursEnd: Date;
  //#endregion
}
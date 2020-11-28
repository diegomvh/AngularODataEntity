import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.entity';
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
//#endregion

export interface WindowsUpdateActiveHoursInstall extends WindowsUpdateInstallScheduleType {
  //#region ODataApi Properties
  activeHoursEnd: Date;
  activeHoursStart: Date;
  //#endregion
}
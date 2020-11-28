import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateInstallScheduleType } from './windowsupdateinstallscheduletype.entity';
import { WeeklySchedule } from './weeklyschedule.enum';
import { WindowsUpdateInstallScheduleTypeModel } from './windowsupdateinstallscheduletype.model';
import { WindowsUpdateInstallScheduleTypeCollection } from './windowsupdateinstallscheduletype.collection';
//#endregion

export interface WindowsUpdateScheduledInstall extends WindowsUpdateInstallScheduleType {
  //#region ODataApi Properties
  scheduledInstallDay: WeeklySchedule;
  scheduledInstallTime: Date;
  //#endregion
}
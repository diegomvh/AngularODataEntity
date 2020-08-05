import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateScheduledInstall } from './windowsupdatescheduledinstall.entity';
//#endregion

export const WindowsUpdateScheduledInstallConfig = {
  name: "WindowsUpdateScheduledInstall",
  base: "microsoft.graph.windowsUpdateInstallScheduleType",
  annotations: [],
  fields: {
    scheduledInstallDay: {type: 'graph.weeklySchedule', nullable: false},
    scheduledInstallTime: {type: 'Edm.TimeOfDay', nullable: false}
  }
} as EntityConfig<WindowsUpdateScheduledInstall>;
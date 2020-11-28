import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateScheduledInstall } from './windowsupdatescheduledinstall.complex';
import { WindowsUpdateScheduledInstallModel } from './windowsupdatescheduledinstall.model';
import { WindowsUpdateScheduledInstallCollection } from './windowsupdatescheduledinstall.collection';
//#endregion

export const WindowsUpdateScheduledInstallConfig = {
  name: "windowsUpdateScheduledInstall",
  base: "microsoft.graph.windowsUpdateInstallScheduleType",
  model: WindowsUpdateScheduledInstallModel,
  collection: WindowsUpdateScheduledInstallCollection,
  annotations: [],
  fields: {
    scheduledInstallDay: {type: 'graph.weeklySchedule', nullable: false},
    scheduledInstallTime: {type: 'Edm.TimeOfDay', nullable: false}
  }
} as StructuredTypeConfig<WindowsUpdateScheduledInstall>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateScheduledInstall } from './windowsupdatescheduledinstall.entity';
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
} as EntityConfig<WindowsUpdateScheduledInstall>;
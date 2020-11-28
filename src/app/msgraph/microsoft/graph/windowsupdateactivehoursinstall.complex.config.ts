import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateActiveHoursInstall } from './windowsupdateactivehoursinstall.complex';
import { WindowsUpdateActiveHoursInstallModel } from './windowsupdateactivehoursinstall.model';
import { WindowsUpdateActiveHoursInstallCollection } from './windowsupdateactivehoursinstall.collection';
//#endregion

export const WindowsUpdateActiveHoursInstallConfig = {
  name: "windowsUpdateActiveHoursInstall",
  base: "microsoft.graph.windowsUpdateInstallScheduleType",
  model: WindowsUpdateActiveHoursInstallModel,
  collection: WindowsUpdateActiveHoursInstallCollection,
  annotations: [],
  fields: {
    activeHoursEnd: {type: 'Edm.TimeOfDay', nullable: false},
    activeHoursStart: {type: 'Edm.TimeOfDay', nullable: false}
  }
} as StructuredTypeConfig<WindowsUpdateActiveHoursInstall>;
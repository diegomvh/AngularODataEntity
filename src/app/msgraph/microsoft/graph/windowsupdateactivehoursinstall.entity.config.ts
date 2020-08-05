import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateActiveHoursInstall } from './windowsupdateactivehoursinstall.entity';
//#endregion

export const WindowsUpdateActiveHoursInstallConfig = {
  name: "windowsUpdateActiveHoursInstall",
  base: "microsoft.graph.windowsUpdateInstallScheduleType",
  annotations: [],
  fields: {
    activeHoursStart: {type: 'Edm.TimeOfDay', nullable: false},
    activeHoursEnd: {type: 'Edm.TimeOfDay', nullable: false}
  }
} as EntityConfig<WindowsUpdateActiveHoursInstall>;
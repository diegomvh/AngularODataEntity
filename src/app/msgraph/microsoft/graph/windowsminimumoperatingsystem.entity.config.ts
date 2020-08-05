import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.entity';
//#endregion

export const WindowsMinimumOperatingSystemConfig = {
  name: "WindowsMinimumOperatingSystem",
  annotations: [],
  fields: {
    v8_0: {type: 'Edm.Boolean', nullable: false},
    v8_1: {type: 'Edm.Boolean', nullable: false},
    v10_0: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsMinimumOperatingSystem>;
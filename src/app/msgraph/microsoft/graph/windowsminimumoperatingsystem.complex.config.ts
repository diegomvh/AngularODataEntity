import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsMinimumOperatingSystem } from './windowsminimumoperatingsystem.complex';
import { WindowsMinimumOperatingSystemModel } from './windowsminimumoperatingsystem.model';
import { WindowsMinimumOperatingSystemCollection } from './windowsminimumoperatingsystem.collection';
//#endregion

export const WindowsMinimumOperatingSystemConfig = {
  name: "windowsMinimumOperatingSystem",
  model: WindowsMinimumOperatingSystemModel,
  collection: WindowsMinimumOperatingSystemCollection,
  annotations: [],
  fields: {
    v10_0: {type: 'Edm.Boolean', nullable: false},
    v8_0: {type: 'Edm.Boolean', nullable: false},
    v8_1: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WindowsMinimumOperatingSystem>;
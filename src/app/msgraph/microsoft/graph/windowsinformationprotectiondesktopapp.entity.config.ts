import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionDesktopApp } from './windowsinformationprotectiondesktopapp.entity';
//#endregion

export const WindowsInformationProtectionDesktopAppConfig = {
  name: "windowsInformationProtectionDesktopApp",
  base: "microsoft.graph.windowsInformationProtectionApp",
  annotations: [],
  fields: {
    binaryName: {type: 'Edm.String', nullable: false},
    binaryVersionLow: {type: 'Edm.String'},
    binaryVersionHigh: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsInformationProtectionDesktopApp>;
import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionDesktopApp } from './windowsinformationprotectiondesktopapp.complex';
import { WindowsInformationProtectionDesktopAppModel } from './windowsinformationprotectiondesktopapp.model';
import { WindowsInformationProtectionDesktopAppCollection } from './windowsinformationprotectiondesktopapp.collection';
//#endregion

export const WindowsInformationProtectionDesktopAppConfig = {
  name: "windowsInformationProtectionDesktopApp",
  base: "microsoft.graph.windowsInformationProtectionApp",
  model: WindowsInformationProtectionDesktopAppModel,
  collection: WindowsInformationProtectionDesktopAppCollection,
  annotations: [],
  fields: {
    binaryName: {type: 'Edm.String', nullable: false},
    binaryVersionHigh: {type: 'Edm.String'},
    binaryVersionLow: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionDesktopApp>;
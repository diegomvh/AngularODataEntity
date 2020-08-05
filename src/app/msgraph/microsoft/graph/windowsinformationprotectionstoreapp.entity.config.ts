﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionStoreApp } from './windowsinformationprotectionstoreapp.entity';
//#endregion

export const WindowsInformationProtectionStoreAppConfig = {
  name: "windowsInformationProtectionStoreApp",
  base: "microsoft.graph.windowsInformationProtectionApp",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WindowsInformationProtectionStoreApp>;
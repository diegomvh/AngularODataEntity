import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionStoreApp } from './windowsinformationprotectionstoreapp.entity';
import { WindowsInformationProtectionStoreAppModel } from './windowsinformationprotectionstoreapp.model';
import { WindowsInformationProtectionStoreAppCollection } from './windowsinformationprotectionstoreapp.collection';
//#endregion

export const WindowsInformationProtectionStoreAppConfig = {
  name: "windowsInformationProtectionStoreApp",
  base: "microsoft.graph.windowsInformationProtectionApp",
  model: WindowsInformationProtectionStoreAppModel,
  collection: WindowsInformationProtectionStoreAppCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WindowsInformationProtectionStoreApp>;
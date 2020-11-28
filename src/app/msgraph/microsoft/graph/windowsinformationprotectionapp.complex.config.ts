import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.complex';
import { WindowsInformationProtectionAppModel } from './windowsinformationprotectionapp.model';
import { WindowsInformationProtectionAppCollection } from './windowsinformationprotectionapp.collection';
//#endregion

export const WindowsInformationProtectionAppConfig = {
  name: "windowsInformationProtectionApp",
  model: WindowsInformationProtectionAppModel,
  collection: WindowsInformationProtectionAppCollection,
  annotations: [],
  fields: {
    denied: {type: 'Edm.Boolean', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    productName: {type: 'Edm.String'},
    publisherName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionApp>;
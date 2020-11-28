import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
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
} as EntityConfig<WindowsInformationProtectionApp>;
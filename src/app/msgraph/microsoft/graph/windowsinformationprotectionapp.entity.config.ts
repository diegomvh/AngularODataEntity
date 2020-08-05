import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionApp } from './windowsinformationprotectionapp.entity';
//#endregion

export const WindowsInformationProtectionAppConfig = {
  name: "windowsInformationProtectionApp",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    publisherName: {type: 'Edm.String'},
    productName: {type: 'Edm.String'},
    denied: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsInformationProtectionApp>;
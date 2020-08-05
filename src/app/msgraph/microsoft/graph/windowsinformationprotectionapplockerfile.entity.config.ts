import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
//#endregion

export const WindowsInformationProtectionAppLockerFileConfig = {
  name: "windowsInformationProtectionAppLockerFile",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    fileHash: {type: 'Edm.String'},
    file: {type: 'Edm.Binary'},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsInformationProtectionAppLockerFile>;
import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionAppLockerFile } from './windowsinformationprotectionapplockerfile.entity';
import { WindowsInformationProtectionAppLockerFileModel } from './windowsinformationprotectionapplockerfile.model';
import { WindowsInformationProtectionAppLockerFileCollection } from './windowsinformationprotectionapplockerfile.collection';
//#endregion

export const WindowsInformationProtectionAppLockerFileConfig = {
  name: "windowsInformationProtectionAppLockerFile",
  base: "microsoft.graph.entity",
  model: WindowsInformationProtectionAppLockerFileModel,
  collection: WindowsInformationProtectionAppLockerFileCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    file: {type: 'Edm.Binary'},
    fileHash: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionAppLockerFile>;
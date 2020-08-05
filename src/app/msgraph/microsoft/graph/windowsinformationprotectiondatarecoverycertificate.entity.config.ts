import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.entity';
//#endregion

export const WindowsInformationProtectionDataRecoveryCertificateConfig = {
  name: "WindowsInformationProtectionDataRecoveryCertificate",
  annotations: [],
  fields: {
    subjectName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    certificate: {type: 'Edm.Binary'}
  }
} as EntityConfig<WindowsInformationProtectionDataRecoveryCertificate>;
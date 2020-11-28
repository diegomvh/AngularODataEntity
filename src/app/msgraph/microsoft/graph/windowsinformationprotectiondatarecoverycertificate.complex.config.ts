import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionDataRecoveryCertificate } from './windowsinformationprotectiondatarecoverycertificate.complex';
import { WindowsInformationProtectionDataRecoveryCertificateModel } from './windowsinformationprotectiondatarecoverycertificate.model';
import { WindowsInformationProtectionDataRecoveryCertificateCollection } from './windowsinformationprotectiondatarecoverycertificate.collection';
//#endregion

export const WindowsInformationProtectionDataRecoveryCertificateConfig = {
  name: "windowsInformationProtectionDataRecoveryCertificate",
  model: WindowsInformationProtectionDataRecoveryCertificateModel,
  collection: WindowsInformationProtectionDataRecoveryCertificateCollection,
  annotations: [],
  fields: {
    certificate: {type: 'Edm.Binary'},
    description: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    subjectName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionDataRecoveryCertificate>;
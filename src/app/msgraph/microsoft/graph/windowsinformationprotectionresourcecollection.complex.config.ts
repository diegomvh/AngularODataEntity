import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.complex';
import { WindowsInformationProtectionResourceCollectionModel } from './windowsinformationprotectionresourcecollection.model';
import { WindowsInformationProtectionResourceCollectionCollection } from './windowsinformationprotectionresourcecollection.collection';
//#endregion

export const WindowsInformationProtectionResourceCollectionConfig = {
  name: "windowsInformationProtectionResourceCollection",
  model: WindowsInformationProtectionResourceCollectionModel,
  collection: WindowsInformationProtectionResourceCollectionCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    resources: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<WindowsInformationProtectionResourceCollection>;
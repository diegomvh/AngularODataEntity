import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionResourceCollection } from './windowsinformationprotectionresourcecollection.entity';
//#endregion

export const WindowsInformationProtectionResourceCollectionConfig = {
  name: "windowsInformationProtectionResourceCollection",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    resources: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<WindowsInformationProtectionResourceCollection>;
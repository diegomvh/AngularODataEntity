import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObjectPartnerReference } from './directoryobjectpartnerreference.entity';
//#endregion

export const DirectoryObjectPartnerReferenceConfig = {
  name: "directoryObjectPartnerReference",
  base: "microsoft.graph.directoryObject",
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    externalPartnerTenantId: {type: 'Edm.Guid'},
    objectType: {type: 'Edm.String'}
  }
} as EntityConfig<DirectoryObjectPartnerReference>;
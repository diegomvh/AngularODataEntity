import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObjectPartnerReference } from './directoryobjectpartnerreference.entity';
import { DirectoryObjectPartnerReferenceModel } from './directoryobjectpartnerreference.model';
import { DirectoryObjectPartnerReferenceCollection } from './directoryobjectpartnerreference.collection';
//#endregion

export const DirectoryObjectPartnerReferenceConfig = {
  name: "directoryObjectPartnerReference",
  base: "microsoft.graph.directoryObject",
  model: DirectoryObjectPartnerReferenceModel,
  collection: DirectoryObjectPartnerReferenceCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    externalPartnerTenantId: {type: 'Edm.Guid'},
    objectType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DirectoryObjectPartnerReference>;
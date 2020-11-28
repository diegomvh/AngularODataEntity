import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentityContainer } from './identitycontainer.entity';
import { IdentityContainerModel } from './identitycontainer.model';
import { IdentityContainerCollection } from './identitycontainer.collection';
//#endregion

export const IdentityContainerConfig = {
  name: "identityContainer",
  base: "microsoft.graph.entity",
  model: IdentityContainerModel,
  collection: IdentityContainerCollection,
  annotations: [],
  fields: {
    conditionalAccess: {type: 'graph.conditionalAccessRoot', navigation: true}
  }
} as StructuredTypeConfig<IdentityContainer>;
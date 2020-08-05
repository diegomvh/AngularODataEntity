import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentityContainer } from './identitycontainer.entity';
//#endregion

export const IdentityContainerConfig = {
  name: "IdentityContainer",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    conditionalAccess: {type: 'graph.conditionalAccessRoot', navigation: true}
  }
} as EntityConfig<IdentityContainer>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { BaseItemVersion } from './baseitemversion.entity';
//#endregion

export const BaseItemVersionConfig = {
  name: "BaseItemVersion",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    publication: {type: 'graph.publicationFacet'}
  }
} as EntityConfig<BaseItemVersion>;
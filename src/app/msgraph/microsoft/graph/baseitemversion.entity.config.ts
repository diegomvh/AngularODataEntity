import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { BaseItemVersion } from './baseitemversion.entity';
import { BaseItemVersionModel } from './baseitemversion.model';
import { BaseItemVersionCollection } from './baseitemversion.collection';
//#endregion

export const BaseItemVersionConfig = {
  name: "baseItemVersion",
  base: "microsoft.graph.entity",
  model: BaseItemVersionModel,
  collection: BaseItemVersionCollection,
  annotations: [],
  fields: {
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    publication: {type: 'graph.publicationFacet'}
  }
} as StructuredTypeConfig<BaseItemVersion>;
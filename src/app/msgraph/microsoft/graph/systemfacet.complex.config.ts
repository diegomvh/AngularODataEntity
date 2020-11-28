import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SystemFacet } from './systemfacet.complex';
import { SystemFacetModel } from './systemfacet.model';
import { SystemFacetCollection } from './systemfacet.collection';
//#endregion

export const SystemFacetConfig = {
  name: "systemFacet",
  model: SystemFacetModel,
  collection: SystemFacetCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<SystemFacet>;
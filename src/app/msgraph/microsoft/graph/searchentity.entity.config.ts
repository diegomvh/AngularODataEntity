import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SearchEntity } from './searchentity.entity';
import { SearchEntityModel } from './searchentity.model';
import { SearchEntityCollection } from './searchentity.collection';
//#endregion

export const SearchEntityConfig = {
  name: "searchEntity",
  base: "microsoft.graph.entity",
  model: SearchEntityModel,
  collection: SearchEntityCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<SearchEntity>;
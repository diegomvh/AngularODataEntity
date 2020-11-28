import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineBase } from './edgesearchenginebase.complex';
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
import { EdgeSearchEngineBaseCollection } from './edgesearchenginebase.collection';
//#endregion

export const EdgeSearchEngineBaseConfig = {
  name: "edgeSearchEngineBase",
  model: EdgeSearchEngineBaseModel,
  collection: EdgeSearchEngineBaseCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<EdgeSearchEngineBase>;
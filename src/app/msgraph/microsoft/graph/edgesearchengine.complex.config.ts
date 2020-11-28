import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngine } from './edgesearchengine.complex';
import { EdgeSearchEngineModel } from './edgesearchengine.model';
import { EdgeSearchEngineCollection } from './edgesearchengine.collection';
//#endregion

export const EdgeSearchEngineConfig = {
  name: "edgeSearchEngine",
  base: "microsoft.graph.edgeSearchEngineBase",
  model: EdgeSearchEngineModel,
  collection: EdgeSearchEngineCollection,
  annotations: [],
  fields: {
    edgeSearchEngineType: {type: 'graph.edgeSearchEngineType', nullable: false}
  }
} as StructuredTypeConfig<EdgeSearchEngine>;
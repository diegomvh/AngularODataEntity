import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngine } from './edgesearchengine.entity';
//#endregion

export const EdgeSearchEngineConfig = {
  name: "edgeSearchEngine",
  base: "microsoft.graph.edgeSearchEngineBase",
  annotations: [],
  fields: {
    edgeSearchEngineType: {type: 'graph.edgeSearchEngineType', nullable: false}
  }
} as EntityConfig<EdgeSearchEngine>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineCustom } from './edgesearchenginecustom.entity';
import { EdgeSearchEngineCustomModel } from './edgesearchenginecustom.model';
import { EdgeSearchEngineCustomCollection } from './edgesearchenginecustom.collection';
//#endregion

export const EdgeSearchEngineCustomConfig = {
  name: "edgeSearchEngineCustom",
  base: "microsoft.graph.edgeSearchEngineBase",
  model: EdgeSearchEngineCustomModel,
  collection: EdgeSearchEngineCustomCollection,
  annotations: [],
  fields: {
    edgeSearchEngineOpenSearchXmlUrl: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<EdgeSearchEngineCustom>;
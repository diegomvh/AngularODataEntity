import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineCustom } from './edgesearchenginecustom.entity';
//#endregion

export const EdgeSearchEngineCustomConfig = {
  name: "EdgeSearchEngineCustom",
  base: "microsoft.graph.edgeSearchEngineBase",
  annotations: [],
  fields: {
    edgeSearchEngineOpenSearchXmlUrl: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<EdgeSearchEngineCustom>;
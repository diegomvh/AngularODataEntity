import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConvertIdResult } from './convertidresult.entity';
//#endregion

export const ConvertIdResultConfig = {
  name: "ConvertIdResult",
  annotations: [],
  fields: {
    sourceId: {type: 'Edm.String'},
    targetId: {type: 'Edm.String'},
    errorDetails: {type: 'graph.genericError'}
  }
} as EntityConfig<ConvertIdResult>;
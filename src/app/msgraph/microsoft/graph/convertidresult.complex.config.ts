import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConvertIdResult } from './convertidresult.complex';
import { ConvertIdResultModel } from './convertidresult.model';
import { ConvertIdResultCollection } from './convertidresult.collection';
//#endregion

export const ConvertIdResultConfig = {
  name: "convertIdResult",
  model: ConvertIdResultModel,
  collection: ConvertIdResultCollection,
  annotations: [],
  fields: {
    errorDetails: {type: 'graph.genericError'},
    sourceId: {type: 'Edm.String'},
    targetId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ConvertIdResult>;
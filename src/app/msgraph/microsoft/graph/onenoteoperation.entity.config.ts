import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteOperation } from './onenoteoperation.entity';
import { OnenoteOperationModel } from './onenoteoperation.model';
import { OnenoteOperationCollection } from './onenoteoperation.collection';
//#endregion

export const OnenoteOperationConfig = {
  name: "onenoteOperation",
  base: "microsoft.graph.operation",
  model: OnenoteOperationModel,
  collection: OnenoteOperationCollection,
  annotations: [],
  fields: {
    error: {type: 'graph.onenoteOperationError'},
    percentComplete: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String'},
    resourceLocation: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenoteOperation>;
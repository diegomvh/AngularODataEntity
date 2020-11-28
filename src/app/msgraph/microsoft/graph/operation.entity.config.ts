import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Operation } from './operation.entity';
import { OperationModel } from './operation.model';
import { OperationCollection } from './operation.collection';
//#endregion

export const OperationConfig = {
  name: "operation",
  base: "microsoft.graph.entity",
  model: OperationModel,
  collection: OperationCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastActionDateTime: {type: 'Edm.DateTimeOffset'},
    status: {type: 'graph.operationStatus'}
  }
} as StructuredTypeConfig<Operation>;
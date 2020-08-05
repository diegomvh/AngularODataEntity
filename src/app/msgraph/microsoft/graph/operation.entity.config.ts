import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Operation } from './operation.entity';
//#endregion

export const OperationConfig = {
  name: "Operation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    status: {type: 'graph.operationStatus'},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastActionDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<Operation>;
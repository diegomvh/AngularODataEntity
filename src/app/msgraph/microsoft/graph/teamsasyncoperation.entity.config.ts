import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
//#endregion

export const TeamsAsyncOperationConfig = {
  name: "teamsAsyncOperation",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    operationType: {type: 'graph.teamsAsyncOperationType', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.teamsAsyncOperationStatus', nullable: false},
    lastActionDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    attemptsCount: {type: 'Edm.Int32', nullable: false},
    targetResourceId: {type: 'Edm.String'},
    targetResourceLocation: {type: 'Edm.String'},
    error: {type: 'graph.operationError'}
  }
} as EntityConfig<TeamsAsyncOperation>;
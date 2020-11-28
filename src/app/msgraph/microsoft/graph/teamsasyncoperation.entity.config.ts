import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAsyncOperation } from './teamsasyncoperation.entity';
import { TeamsAsyncOperationModel } from './teamsasyncoperation.model';
import { TeamsAsyncOperationCollection } from './teamsasyncoperation.collection';
//#endregion

export const TeamsAsyncOperationConfig = {
  name: "teamsAsyncOperation",
  base: "microsoft.graph.entity",
  open: true,
  model: TeamsAsyncOperationModel,
  collection: TeamsAsyncOperationCollection,
  annotations: [],
  fields: {
    attemptsCount: {type: 'Edm.Int32', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    error: {type: 'graph.operationError'},
    lastActionDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    operationType: {type: 'graph.teamsAsyncOperationType', nullable: false},
    status: {type: 'graph.teamsAsyncOperationStatus', nullable: false},
    targetResourceId: {type: 'Edm.String'},
    targetResourceLocation: {type: 'Edm.String'}
  }
} as EntityConfig<TeamsAsyncOperation>;
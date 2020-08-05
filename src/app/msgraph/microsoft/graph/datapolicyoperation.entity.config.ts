import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DataPolicyOperation } from './datapolicyoperation.entity';
//#endregion

export const DataPolicyOperationConfig = {
  name: "DataPolicyOperation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    completedDateTime: {type: 'Edm.DateTimeOffset'},
    status: {type: 'graph.dataPolicyOperationStatus'},
    storageLocation: {type: 'Edm.String'},
    userId: {type: 'Edm.String', nullable: false},
    submittedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    progress: {type: 'Edm.Double', nullable: false}
  }
} as EntityConfig<DataPolicyOperation>;
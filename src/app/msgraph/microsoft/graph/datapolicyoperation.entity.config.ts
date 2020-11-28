import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DataPolicyOperation } from './datapolicyoperation.entity';
import { DataPolicyOperationModel } from './datapolicyoperation.model';
import { DataPolicyOperationCollection } from './datapolicyoperation.collection';
//#endregion

export const DataPolicyOperationConfig = {
  name: "dataPolicyOperation",
  base: "microsoft.graph.entity",
  model: DataPolicyOperationModel,
  collection: DataPolicyOperationCollection,
  annotations: [],
  fields: {
    completedDateTime: {type: 'Edm.DateTimeOffset'},
    progress: {type: 'Edm.Double', nullable: false},
    status: {type: 'graph.dataPolicyOperationStatus'},
    storageLocation: {type: 'Edm.String'},
    submittedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userId: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<DataPolicyOperation>;
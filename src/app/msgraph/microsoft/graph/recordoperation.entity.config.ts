import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecordOperation } from './recordoperation.entity';
import { RecordOperationModel } from './recordoperation.model';
import { RecordOperationCollection } from './recordoperation.collection';
//#endregion

export const RecordOperationConfig = {
  name: "recordOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: RecordOperationModel,
  collection: RecordOperationCollection,
  annotations: [],
  fields: {
    recordingAccessToken: {type: 'Edm.String'},
    recordingLocation: {type: 'Edm.String'}
  }
} as EntityConfig<RecordOperation>;
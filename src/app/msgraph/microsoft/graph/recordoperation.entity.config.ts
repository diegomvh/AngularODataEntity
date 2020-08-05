import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecordOperation } from './recordoperation.entity';
//#endregion

export const RecordOperationConfig = {
  name: "recordOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    recordingLocation: {type: 'Edm.String'},
    recordingAccessToken: {type: 'Edm.String'}
  }
} as EntityConfig<RecordOperation>;
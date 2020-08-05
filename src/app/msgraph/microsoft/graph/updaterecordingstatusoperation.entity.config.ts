import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UpdateRecordingStatusOperation } from './updaterecordingstatusoperation.entity';
//#endregion

export const UpdateRecordingStatusOperationConfig = {
  name: "UpdateRecordingStatusOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<UpdateRecordingStatusOperation>;
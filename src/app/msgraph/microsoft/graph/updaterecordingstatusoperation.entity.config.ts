import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UpdateRecordingStatusOperation } from './updaterecordingstatusoperation.entity';
//#endregion

export const UpdateRecordingStatusOperationConfig = {
  name: "updateRecordingStatusOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<UpdateRecordingStatusOperation>;
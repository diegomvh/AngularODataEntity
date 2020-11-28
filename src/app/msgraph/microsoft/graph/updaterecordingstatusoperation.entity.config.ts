import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UpdateRecordingStatusOperation } from './updaterecordingstatusoperation.entity';
import { UpdateRecordingStatusOperationModel } from './updaterecordingstatusoperation.model';
import { UpdateRecordingStatusOperationCollection } from './updaterecordingstatusoperation.collection';
//#endregion

export const UpdateRecordingStatusOperationConfig = {
  name: "updateRecordingStatusOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: UpdateRecordingStatusOperationModel,
  collection: UpdateRecordingStatusOperationCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<UpdateRecordingStatusOperation>;
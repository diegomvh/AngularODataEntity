import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CancelMediaProcessingOperation } from './cancelmediaprocessingoperation.entity';
import { CancelMediaProcessingOperationModel } from './cancelmediaprocessingoperation.model';
import { CancelMediaProcessingOperationCollection } from './cancelmediaprocessingoperation.collection';
//#endregion

export const CancelMediaProcessingOperationConfig = {
  name: "cancelMediaProcessingOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: CancelMediaProcessingOperationModel,
  collection: CancelMediaProcessingOperationCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<CancelMediaProcessingOperation>;
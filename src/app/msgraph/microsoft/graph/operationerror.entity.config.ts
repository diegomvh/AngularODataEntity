import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OperationError } from './operationerror.entity';
import { OperationErrorModel } from './operationerror.model';
import { OperationErrorCollection } from './operationerror.collection';
//#endregion

export const OperationErrorConfig = {
  name: "operationError",
  model: OperationErrorModel,
  collection: OperationErrorCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as EntityConfig<OperationError>;
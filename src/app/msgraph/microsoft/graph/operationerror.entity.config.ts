import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OperationError } from './operationerror.entity';
//#endregion

export const OperationErrorConfig = {
  name: "operationError",
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as EntityConfig<OperationError>;
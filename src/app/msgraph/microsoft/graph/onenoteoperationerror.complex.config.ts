import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteOperationError } from './onenoteoperationerror.complex';
import { OnenoteOperationErrorModel } from './onenoteoperationerror.model';
import { OnenoteOperationErrorCollection } from './onenoteoperationerror.collection';
//#endregion

export const OnenoteOperationErrorConfig = {
  name: "onenoteOperationError",
  model: OnenoteOperationErrorModel,
  collection: OnenoteOperationErrorCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<OnenoteOperationError>;
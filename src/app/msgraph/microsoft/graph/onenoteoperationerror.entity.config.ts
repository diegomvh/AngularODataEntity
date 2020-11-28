import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteOperationError } from './onenoteoperationerror.entity';
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
} as EntityConfig<OnenoteOperationError>;
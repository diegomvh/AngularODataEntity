﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteOperationError } from './onenoteoperationerror.entity';
//#endregion

export const OnenoteOperationErrorConfig = {
  name: "OnenoteOperationError",
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as EntityConfig<OnenoteOperationError>;
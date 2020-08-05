import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteOperation } from './onenoteoperation.entity';
//#endregion

export const OnenoteOperationConfig = {
  name: "OnenoteOperation",
  base: "microsoft.graph.operation",
  annotations: [],
  fields: {
    resourceLocation: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String'},
    error: {type: 'graph.onenoteOperationError'},
    percentComplete: {type: 'Edm.String'}
  }
} as EntityConfig<OnenoteOperation>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookOperationError } from './workbookoperationerror.entity';
//#endregion

export const WorkbookOperationErrorConfig = {
  name: "workbookOperationError",
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'},
    innerError: {type: 'graph.workbookOperationError'}
  }
} as EntityConfig<WorkbookOperationError>;
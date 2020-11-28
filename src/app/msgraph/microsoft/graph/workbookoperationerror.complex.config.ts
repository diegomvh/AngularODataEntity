import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookOperationError } from './workbookoperationerror.complex';
import { WorkbookOperationErrorModel } from './workbookoperationerror.model';
import { WorkbookOperationErrorCollection } from './workbookoperationerror.collection';
//#endregion

export const WorkbookOperationErrorConfig = {
  name: "workbookOperationError",
  model: WorkbookOperationErrorModel,
  collection: WorkbookOperationErrorCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    innerError: {type: 'graph.workbookOperationError'},
    message: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookOperationError>;
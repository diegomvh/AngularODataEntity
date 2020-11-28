import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookOperation } from './workbookoperation.entity';
import { WorkbookOperationModel } from './workbookoperation.model';
import { WorkbookOperationCollection } from './workbookoperation.collection';
//#endregion

export const WorkbookOperationConfig = {
  name: "workbookOperation",
  base: "microsoft.graph.entity",
  model: WorkbookOperationModel,
  collection: WorkbookOperationCollection,
  annotations: [],
  fields: {
    error: {type: 'graph.workbookOperationError'},
    resourceLocation: {type: 'Edm.String'},
    status: {type: 'graph.workbookOperationStatus', nullable: false}
  }
} as StructuredTypeConfig<WorkbookOperation>;
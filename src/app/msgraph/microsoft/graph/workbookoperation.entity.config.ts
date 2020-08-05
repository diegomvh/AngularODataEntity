import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookOperation } from './workbookoperation.entity';
//#endregion

export const WorkbookOperationConfig = {
  name: "workbookOperation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    status: {type: 'graph.workbookOperationStatus', nullable: false},
    resourceLocation: {type: 'Edm.String'},
    error: {type: 'graph.workbookOperationError'}
  }
} as EntityConfig<WorkbookOperation>;
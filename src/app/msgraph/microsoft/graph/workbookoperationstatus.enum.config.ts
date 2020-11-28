import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookOperationStatus } from './workbookoperationstatus.enum';
//#endregion

export const WorkbookOperationStatusConfig = {
  name: "workbookOperationStatus",
  members: WorkbookOperationStatus
} as EnumTypeConfig<WorkbookOperationStatus>;
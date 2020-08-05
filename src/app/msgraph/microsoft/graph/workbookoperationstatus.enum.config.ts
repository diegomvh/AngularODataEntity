import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookOperationStatus } from './workbookoperationstatus.enum';
//#endregion

export const WorkbookOperationStatusConfig = {
  name: "WorkbookOperationStatus",
  members: WorkbookOperationStatus
} as EnumConfig<WorkbookOperationStatus>;
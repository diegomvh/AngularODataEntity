import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookOperationStatus } from './workbookoperationstatus.enum';
import { WorkbookOperationError } from './workbookoperationerror.entity';
//#endregion

export interface WorkbookOperation extends Entity {
  //#region ODataApi Properties
  status: WorkbookOperationStatus;
  resourceLocation?: string;
  error?: WorkbookOperationError;
  //#endregion
}
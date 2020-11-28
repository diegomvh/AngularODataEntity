import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookOperationStatus } from './workbookoperationstatus.enum';
import { WorkbookOperationError } from './workbookoperationerror.complex';
import { WorkbookOperationErrorModel } from './workbookoperationerror.model';
import { EntityModel } from './entity.model';
import { WorkbookOperationErrorCollection } from './workbookoperationerror.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookOperation extends Entity {
  //#region ODataApi Properties
  error?: WorkbookOperationError;
  resourceLocation?: string;
  status: WorkbookOperationStatus;
  //#endregion
}
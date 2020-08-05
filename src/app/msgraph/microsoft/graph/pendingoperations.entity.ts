import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PendingContentUpdate } from './pendingcontentupdate.entity';
//#endregion

export interface PendingOperations {
  //#region ODataApi Properties
  pendingContentUpdate?: PendingContentUpdate;
  //#endregion
}
import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PendingContentUpdate } from './pendingcontentupdate.complex';
import { PendingContentUpdateModel } from './pendingcontentupdate.model';
import { PendingContentUpdateCollection } from './pendingcontentupdate.collection';
//#endregion

export interface PendingOperations {
  //#region ODataApi Properties
  pendingContentUpdate?: PendingContentUpdate;
  //#endregion
}
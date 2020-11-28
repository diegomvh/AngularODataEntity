import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PendingOperations } from './pendingoperations.complex';
import { PendingContentUpdate } from './pendingcontentupdate.complex';
import { PendingContentUpdateModel } from './pendingcontentupdate.model';
import { PendingOperationsCollection } from './pendingoperations.collection';
import { PendingContentUpdateCollection } from './pendingcontentupdate.collection';
//#endregion

export class PendingOperationsModel<E extends PendingOperations> extends ODataModel<E> {
  //#region ODataApi Properties
  pendingContentUpdate?: PendingContentUpdateModel<PendingContentUpdate>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
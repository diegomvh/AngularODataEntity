import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PendingOperations } from './pendingoperations.entity';
import { PendingContentUpdate } from './pendingcontentupdate.entity';
import { PendingOperationsModel } from './pendingoperations.model';
import { PendingContentUpdateModel } from './pendingcontentupdate.model';
import { PendingContentUpdateCollection } from './pendingcontentupdate.collection';
//#endregion

export class PendingOperationsCollection<E extends PendingOperations, M extends PendingOperationsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
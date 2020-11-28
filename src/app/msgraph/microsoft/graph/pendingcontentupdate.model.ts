import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PendingContentUpdate } from './pendingcontentupdate.entity';
import { PendingContentUpdateCollection } from './pendingcontentupdate.collection';
//#endregion

export class PendingContentUpdateModel<E extends PendingContentUpdate> extends ODataModel<E> {
  //#region ODataApi Properties
  queuedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.complex';
import { SecureScoreControlStateUpdateModel } from './securescorecontrolstateupdate.model';
//#endregion

export class SecureScoreControlStateUpdateCollection<E extends SecureScoreControlStateUpdate, M extends SecureScoreControlStateUpdateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
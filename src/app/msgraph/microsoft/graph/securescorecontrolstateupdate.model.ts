import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.complex';
import { SecureScoreControlStateUpdateCollection } from './securescorecontrolstateupdate.collection';
//#endregion

export class SecureScoreControlStateUpdateModel<E extends SecureScoreControlStateUpdate> extends ODataModel<E> {
  //#region ODataApi Properties
  assignedTo?: string;
  comment?: string;
  state?: string;
  updatedBy?: string;
  updatedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
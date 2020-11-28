import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { SharingInvitation } from './sharinginvitation.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { SharingInvitationCollection } from './sharinginvitation.collection';
//#endregion

export class SharingInvitationModel<E extends SharingInvitation> extends ODataModel<E> {
  //#region ODataApi Properties
  email?: string;
  invitedBy?: IdentitySetModel<IdentitySet>;
  redeemedBy?: string;
  signInRequired?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
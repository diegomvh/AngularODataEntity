import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
//#endregion

export class InvitationParticipantInfoModel<E extends InvitationParticipantInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  identity: IdentitySetModel<IdentitySet>;
  replacesCallId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
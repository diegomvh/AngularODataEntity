import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { IdentitySetModel } from './identityset.model';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class InvitationParticipantInfoCollection<E extends InvitationParticipantInfo, M extends InvitationParticipantInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
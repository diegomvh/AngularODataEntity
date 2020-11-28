import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationCollection } from './commsoperation.collection';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { InviteParticipantsOperation } from './inviteparticipantsoperation.entity';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { InviteParticipantsOperationModel } from './inviteparticipantsoperation.model';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
//#endregion

export class InviteParticipantsOperationCollection<E extends InviteParticipantsOperation, M extends InviteParticipantsOperationModel<E>> extends CommsOperationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CommsOperationModel } from './commsoperation.model';
import { InvitationParticipantInfo } from './invitationparticipantinfo.complex';
import { InviteParticipantsOperation } from './inviteparticipantsoperation.entity';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
import { InviteParticipantsOperationCollection } from './inviteparticipantsoperation.collection';
//#endregion

export class InviteParticipantsOperationModel<E extends InviteParticipantsOperation> extends CommsOperationModel<E> {
  //#region ODataApi Properties
  participants: InvitationParticipantInfoCollection<InvitationParticipantInfo, InvitationParticipantInfoModel<InvitationParticipantInfo>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
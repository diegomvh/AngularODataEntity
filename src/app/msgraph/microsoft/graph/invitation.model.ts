import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { InvitedUserMessageInfo } from './invitedusermessageinfo.complex';
import { Invitation } from './invitation.entity';
import { User } from './user.entity';
import { InvitedUserMessageInfoModel } from './invitedusermessageinfo.model';
import { UserModel } from './user.model';
import { InvitedUserMessageInfoCollection } from './invitedusermessageinfo.collection';
import { InvitationCollection } from './invitation.collection';
import { UserCollection } from './user.collection';
//#endregion

export class InvitationModel<E extends Invitation> extends EntityModel<E> {
  //#region ODataApi Properties
  invitedUserDisplayName?: string;
  invitedUserEmailAddress: string;
  invitedUserMessageInfo?: InvitedUserMessageInfoModel<InvitedUserMessageInfo>;
  invitedUserType?: string;
  inviteRedeemUrl?: string;
  inviteRedirectUrl: string;
  sendInvitationMessage?: boolean;
  status?: string;
  invitedUser?: UserModel<User>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
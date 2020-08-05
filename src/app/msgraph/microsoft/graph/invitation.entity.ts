import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InvitedUserMessageInfo } from './invitedusermessageinfo.entity';
import { User } from './user.entity';
//#endregion

export interface Invitation extends Entity {
  //#region ODataApi Properties
  invitedUserDisplayName?: string;
  invitedUserType?: string;
  invitedUserEmailAddress: string;
  invitedUserMessageInfo?: InvitedUserMessageInfo;
  sendInvitationMessage?: boolean;
  inviteRedirectUrl: string;
  inviteRedeemUrl?: string;
  status?: string;
  invitedUser?: User;
  //#endregion
}
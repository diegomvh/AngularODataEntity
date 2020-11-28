import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InvitedUserMessageInfo } from './invitedusermessageinfo.complex';
import { User } from './user.entity';
import { InvitedUserMessageInfoModel } from './invitedusermessageinfo.model';
import { EntityModel } from './entity.model';
import { UserModel } from './user.model';
import { InvitedUserMessageInfoCollection } from './invitedusermessageinfo.collection';
import { EntityCollection } from './entity.collection';
import { UserCollection } from './user.collection';
//#endregion

export interface Invitation extends Entity {
  //#region ODataApi Properties
  invitedUserDisplayName?: string;
  invitedUserEmailAddress: string;
  invitedUserMessageInfo?: InvitedUserMessageInfo;
  invitedUserType?: string;
  inviteRedeemUrl?: string;
  inviteRedirectUrl: string;
  sendInvitationMessage?: boolean;
  status?: string;
  invitedUser?: User;
  //#endregion
}
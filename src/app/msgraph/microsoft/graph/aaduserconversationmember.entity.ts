import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConversationMember } from './conversationmember.entity';
import { User } from './user.entity';
import { UserModel } from './user.model';
import { ConversationMemberModel } from './conversationmember.model';
import { UserCollection } from './user.collection';
import { ConversationMemberCollection } from './conversationmember.collection';
//#endregion

export interface AadUserConversationMember extends ConversationMember {
  //#region ODataApi Properties
  email?: string;
  userId?: string;
  user?: User;
  //#endregion
}
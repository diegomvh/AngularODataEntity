import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ConversationMember } from './conversationmember.entity';
import { User } from './user.entity';
//#endregion

export interface AadUserConversationMember extends ConversationMember {
  //#region ODataApi Properties
  userId?: string;
  email?: string;
  user?: User;
  //#endregion
}
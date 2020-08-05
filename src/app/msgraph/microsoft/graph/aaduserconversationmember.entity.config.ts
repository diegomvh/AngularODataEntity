import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AadUserConversationMember } from './aaduserconversationmember.entity';
//#endregion

export const AadUserConversationMemberConfig = {
  name: "aadUserConversationMember",
  base: "microsoft.graph.conversationMember",
  annotations: [],
  fields: {
    userId: {type: 'Edm.String'},
    email: {type: 'Edm.String'},
    user: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<AadUserConversationMember>;
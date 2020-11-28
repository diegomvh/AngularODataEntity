import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AadUserConversationMember } from './aaduserconversationmember.entity';
import { AadUserConversationMemberModel } from './aaduserconversationmember.model';
import { AadUserConversationMemberCollection } from './aaduserconversationmember.collection';
//#endregion

export const AadUserConversationMemberConfig = {
  name: "aadUserConversationMember",
  base: "microsoft.graph.conversationMember",
  model: AadUserConversationMemberModel,
  collection: AadUserConversationMemberCollection,
  annotations: [],
  fields: {
    email: {type: 'Edm.String'},
    userId: {type: 'Edm.String'},
    user: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<AadUserConversationMember>;
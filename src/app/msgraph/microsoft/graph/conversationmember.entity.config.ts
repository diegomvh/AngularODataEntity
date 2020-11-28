import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConversationMember } from './conversationmember.entity';
import { ConversationMemberModel } from './conversationmember.model';
import { ConversationMemberCollection } from './conversationmember.collection';
//#endregion

export const ConversationMemberConfig = {
  name: "conversationMember",
  base: "microsoft.graph.entity",
  model: ConversationMemberModel,
  collection: ConversationMemberCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    roles: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<ConversationMember>;
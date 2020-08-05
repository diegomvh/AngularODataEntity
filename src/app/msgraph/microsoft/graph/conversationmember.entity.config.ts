import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConversationMember } from './conversationmember.entity';
//#endregion

export const ConversationMemberConfig = {
  name: "conversationMember",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    roles: {type: 'Edm.String', collection: true},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<ConversationMember>;
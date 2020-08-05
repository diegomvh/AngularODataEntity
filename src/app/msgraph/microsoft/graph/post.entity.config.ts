import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Post } from './post.entity';
//#endregion

export const PostConfig = {
  name: "Post",
  base: "microsoft.graph.outlookItem",
  open: true,
  annotations: [],
  fields: {
    body: {type: 'graph.itemBody'},
    receivedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    from: {type: 'graph.recipient', nullable: false},
    sender: {type: 'graph.recipient'},
    conversationThreadId: {type: 'Edm.String'},
    newParticipants: {type: 'graph.recipient', nullable: false, collection: true},
    conversationId: {type: 'Edm.String'},
    inReplyTo: {type: 'graph.post', navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    attachments: {type: 'graph.attachment', collection: true, navigation: true}
  }
} as EntityConfig<Post>;
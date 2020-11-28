import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Post } from './post.entity';
import { PostModel } from './post.model';
import { PostCollection } from './post.collection';
//#endregion

export const PostConfig = {
  name: "post",
  base: "microsoft.graph.outlookItem",
  open: true,
  model: PostModel,
  collection: PostCollection,
  annotations: [],
  fields: {
    body: {type: 'graph.itemBody'},
    conversationId: {type: 'Edm.String'},
    conversationThreadId: {type: 'Edm.String'},
    from: {type: 'graph.recipient', nullable: false},
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    newParticipants: {type: 'graph.recipient', nullable: false, collection: true},
    receivedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    sender: {type: 'graph.recipient'},
    attachments: {type: 'graph.attachment', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    inReplyTo: {type: 'graph.post', navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true}
  }
} as EntityConfig<Post>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageAttachment } from './chatmessageattachment.entity';
import { ChatMessageAttachmentModel } from './chatmessageattachment.model';
import { ChatMessageAttachmentCollection } from './chatmessageattachment.collection';
//#endregion

export const ChatMessageAttachmentConfig = {
  name: "chatMessageAttachment",
  model: ChatMessageAttachmentModel,
  collection: ChatMessageAttachmentCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'Edm.String'},
    contentUrl: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    thumbnailUrl: {type: 'Edm.String'}
  }
} as EntityConfig<ChatMessageAttachment>;
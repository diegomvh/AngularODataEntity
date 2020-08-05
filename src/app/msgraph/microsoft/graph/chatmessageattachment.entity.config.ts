import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageAttachment } from './chatmessageattachment.entity';
//#endregion

export const ChatMessageAttachmentConfig = {
  name: "chatMessageAttachment",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    contentType: {type: 'Edm.String'},
    contentUrl: {type: 'Edm.String'},
    content: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    thumbnailUrl: {type: 'Edm.String'}
  }
} as EntityConfig<ChatMessageAttachment>;
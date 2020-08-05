import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileAttachment } from './fileattachment.entity';
//#endregion

export const FileAttachmentConfig = {
  name: "fileAttachment",
  base: "microsoft.graph.attachment",
  annotations: [],
  fields: {
    contentId: {type: 'Edm.String'},
    contentLocation: {type: 'Edm.String'},
    contentBytes: {type: 'Edm.Binary'}
  }
} as EntityConfig<FileAttachment>;
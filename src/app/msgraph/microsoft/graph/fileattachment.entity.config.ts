import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileAttachment } from './fileattachment.entity';
import { FileAttachmentModel } from './fileattachment.model';
import { FileAttachmentCollection } from './fileattachment.collection';
//#endregion

export const FileAttachmentConfig = {
  name: "fileAttachment",
  base: "microsoft.graph.attachment",
  model: FileAttachmentModel,
  collection: FileAttachmentCollection,
  annotations: [],
  fields: {
    contentBytes: {type: 'Edm.Binary'},
    contentId: {type: 'Edm.String'},
    contentLocation: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<FileAttachment>;
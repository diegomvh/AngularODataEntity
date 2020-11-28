import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ReferenceAttachment } from './referenceattachment.entity';
import { ReferenceAttachmentModel } from './referenceattachment.model';
import { ReferenceAttachmentCollection } from './referenceattachment.collection';
//#endregion

export const ReferenceAttachmentConfig = {
  name: "referenceAttachment",
  base: "microsoft.graph.attachment",
  model: ReferenceAttachmentModel,
  collection: ReferenceAttachmentCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<ReferenceAttachment>;
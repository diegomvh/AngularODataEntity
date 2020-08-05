import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ReferenceAttachment } from './referenceattachment.entity';
//#endregion

export const ReferenceAttachmentConfig = {
  name: "referenceAttachment",
  base: "microsoft.graph.attachment",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ReferenceAttachment>;
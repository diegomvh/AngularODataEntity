import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ReferenceAttachment } from './referenceattachment.entity';
//#endregion

export const ReferenceAttachmentConfig = {
  name: "ReferenceAttachment",
  base: "microsoft.graph.attachment",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ReferenceAttachment>;
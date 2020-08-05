import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Attachment } from './attachment.entity';
//#endregion

export const AttachmentConfig = {
  name: "attachment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    name: {type: 'Edm.String'},
    contentType: {type: 'Edm.String'},
    size: {type: 'Edm.Int32', nullable: false},
    isInline: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Attachment>;
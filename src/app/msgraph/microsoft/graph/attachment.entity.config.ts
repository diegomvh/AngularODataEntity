import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Attachment } from './attachment.entity';
import { AttachmentModel } from './attachment.model';
import { AttachmentCollection } from './attachment.collection';
//#endregion

export const AttachmentConfig = {
  name: "attachment",
  base: "microsoft.graph.entity",
  model: AttachmentModel,
  collection: AttachmentCollection,
  annotations: [],
  fields: {
    contentType: {type: 'Edm.String'},
    isInline: {type: 'Edm.Boolean', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<Attachment>;
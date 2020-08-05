import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttachmentItem } from './attachmentitem.entity';
//#endregion

export const AttachmentItemConfig = {
  name: "attachmentItem",
  annotations: [],
  fields: {
    attachmentType: {type: 'graph.attachmentType'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Int64'},
    contentType: {type: 'Edm.String'},
    isInline: {type: 'Edm.Boolean'}
  }
} as EntityConfig<AttachmentItem>;
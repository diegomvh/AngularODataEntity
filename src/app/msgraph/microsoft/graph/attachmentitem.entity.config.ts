import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttachmentItem } from './attachmentitem.entity';
import { AttachmentItemModel } from './attachmentitem.model';
import { AttachmentItemCollection } from './attachmentitem.collection';
//#endregion

export const AttachmentItemConfig = {
  name: "attachmentItem",
  model: AttachmentItemModel,
  collection: AttachmentItemCollection,
  annotations: [],
  fields: {
    attachmentType: {type: 'graph.attachmentType'},
    contentType: {type: 'Edm.String'},
    isInline: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Int64'}
  }
} as EntityConfig<AttachmentItem>;
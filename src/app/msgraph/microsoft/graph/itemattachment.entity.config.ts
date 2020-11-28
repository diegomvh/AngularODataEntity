import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemAttachment } from './itemattachment.entity';
import { ItemAttachmentModel } from './itemattachment.model';
import { ItemAttachmentCollection } from './itemattachment.collection';
//#endregion

export const ItemAttachmentConfig = {
  name: "itemAttachment",
  base: "microsoft.graph.attachment",
  model: ItemAttachmentModel,
  collection: ItemAttachmentCollection,
  annotations: [],
  fields: {
    item: {type: 'graph.outlookItem', navigation: true}
  }
} as StructuredTypeConfig<ItemAttachment>;
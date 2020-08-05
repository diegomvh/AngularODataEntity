import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemAttachment } from './itemattachment.entity';
//#endregion

export const ItemAttachmentConfig = {
  name: "itemAttachment",
  base: "microsoft.graph.attachment",
  annotations: [],
  fields: {
    item: {type: 'graph.outlookItem', navigation: true}
  }
} as EntityConfig<ItemAttachment>;
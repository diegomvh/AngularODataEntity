import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ContentTypeOrder } from './contenttypeorder.complex';
import { ContentTypeOrderModel } from './contenttypeorder.model';
import { ContentTypeOrderCollection } from './contenttypeorder.collection';
//#endregion

export const ContentTypeOrderConfig = {
  name: "contentTypeOrder",
  model: ContentTypeOrderModel,
  collection: ContentTypeOrderCollection,
  annotations: [],
  fields: {
    default: {type: 'Edm.Boolean'},
    position: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<ContentTypeOrder>;